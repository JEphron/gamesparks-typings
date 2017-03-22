#!/usr/bin/env python3

""" Generates TypeScript typing definitions from the GameSparks API docs
    Parses a directory containing .md files
    containing lines in the format:
        _signature_ method(type name, type name2)
        _returns_ value
     and generates a set of .d.ts TypeScript definitions
        Instructions:
            $ python3 generate_gs_typings.py "/path/to/Cloud Code API"
            where "Cloud Code API" is https://github.com/GameSparks/gamesparks-docs/tree/master/MARKDOWN/API%20Documentation/Cloud%20Code%20API
"""

from os.path import join, splitext
from os import walk
import re
import sys

MATCH_SIGNATURE = re.compile('_signature_ .*$')
MATCH_RETURNS = re.compile('_returns_ .*$')
TYPE_MAPPING = {"JSON": "any", "date": "Date"}


def swap_type_order_in_params(params_string):
    def flip_and_format(param):
        param_type, name = param.split(' ')
        if '[]' in param_type and param_type[:-2] in TYPE_MAPPING:
            param_type = TYPE_MAPPING[param_type[:-2]] + '[]'
        if param_type in TYPE_MAPPING:
            param_type = TYPE_MAPPING[param_type]
        return name + ': ' + param_type

    def rep(match):
        params = match.groups()[0].split(', ')
        return '(' + ', '.join(map(flip_and_format, params)) + ')'

    result = re.sub(r'\((.+?)\)', rep, params_string, count=1)
    return result


def extract_types_from_links(string):
    def rep(match):
        param_type = match.groups()[0]
        if param_type in TYPE_MAPPING:
            param_type = TYPE_MAPPING[param_type]
            return param_type
        return 'I' + param_type

    return re.sub(r'\[(\w+?)\]\(.+?\)', rep, string)



def process(filepath, interface_name):
    with open(filepath) as file:
        text = file.read()
        signatures = re.findall(r'_signature_.*\n', text)
        returns = re.findall(r'_returns_.*\n', text)
        signatures = [x.replace('</p>\n', '').replace('_signature_', '').strip() for x in signatures]
        returns = [x.replace('</p>\n', '').replace('_returns_', '').strip() for x in returns]
        returns = [TYPE_MAPPING[x] if x in TYPE_MAPPING else x for x in returns]
        returns = [TYPE_MAPPING[x[:-2]]+'[]' if '[]' in x and x[:-2] in TYPE_MAPPING else x for x in returns]
        fn_defs = [x + ': ' + y for x, y in zip(signatures, returns)]
        fn_defs = [extract_types_from_links(x) for x in fn_defs]
        fn_defs = [swap_type_order_in_params(x) for x in fn_defs]
        assert len(signatures) == len(returns)
        if interface_name == 'ISparkTeams':
            sys.exit()
        out_text = '\n\t'.join(fn_defs)

    return 'interface ' + interface_name + ' {\n\t' + out_text + '\n}'


def find_all_md_files(directory):
    all_md_files = []
    for root, _, filenames in walk(directory):
        for file in ([x for x in filenames if splitext(x)[1] == '.md']):
            all_md_files.append((root, file))
    return all_md_files


def main():
    if len(sys.argv) < 2:
        print("usage: first argument should be the path to the documentation folder")
        sys.exit(-1)

    out_dir = 'typings'
    all_md_files = find_all_md_files(sys.argv[1])
    count = 0

    for root, filename in all_md_files:
        interface_name = 'I{}'.format(splitext(filename)[0])
        TYPE_MAPPING[splitext(filename)[0]] = interface_name

    for root, filename in all_md_files:
        interface_name = 'I{}'.format(splitext(filename)[0])
        out_filename = '{}.d.ts'.format(interface_name)
        out_path = join(out_dir, out_filename)
        output_text = process(join(root, filename), interface_name)
        print("   " + out_path)
        count = count + 1
        with open(out_path, 'w') as out_file:
            out_file.writelines(output_text)
    print('wrote', count, 'definitions')
    print('done')


if __name__ == '__main__':
    main()
