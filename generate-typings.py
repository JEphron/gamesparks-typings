import os
from os.path import join, splitext
from os import walk
import re

match_signature = re.compile('_signature_ .*$')
match_returns = re.compile('_returns_ .*$')

type_mapping = {"JSON": "any", "JSON[]": "any[]"}


def swap_type_order_in_params(x):
    def flip_and_format(param):
        type, name = param.split(' ')
        if type in type_mapping:
            type = type_mapping[type]
        return name + ': ' + type

    def rep(match):
        params = match.groups()[0].split(', ')
        return '(' + ', '.join(map(flip_and_format, params)) + ')'

    result = re.sub('\((.+?)\)', rep, x, count=1)
    print('->', result)
    return result


def extract_types_from_links(x):
    def rep(match):
        type = match.groups()[0]
        if type in type_mapping:
            type = type_mapping[type]
        return 'I' + type

    a = re.sub('\[(.*?)\]\(.*?\)', rep, x)
    return a


def process(filepath, interface_name):
    with open(filepath) as file:
        text = file.read()
        signatures = re.findall(r'_signature_.*\n', text)
        returns = re.findall(r'_returns_.*\n', text)
        signatures = [x.replace('</p>\n', '').replace('_signature_', '').strip() for x in signatures]
        returns = [x.replace('</p>\n', '').replace('_returns_', '').strip() for x in returns]
        returns = [type_mapping[x] if x in type_mapping else x for x in returns]
        fn_defs = [x + ': ' + y for x, y in zip(signatures, returns)]
        fn_defs = [extract_types_from_links(x) for x in fn_defs]
        fn_defs = [swap_type_order_in_params(x) for x in fn_defs]
        assert (len(signatures) == len(returns))
        out_text = '\n\t'.join(fn_defs)

    return 'interface ' + interface_name + ' {\n\t' + out_text + '\n}'


def find_all_md_files(directory):
    all_md_files = []
    for root, dirs, filenames in walk(directory):
        for file in ([x for x in filenames if splitext(x)[1] == '.md']):
            all_md_files.append((root, file))
    return all_md_files


def main():
    out_dir = 'typings'
    all_md_files = find_all_md_files('./Cloud Code API')
    count = 0
    for root, f in all_md_files:
        interface_name = 'I{}'.format(splitext(f)[0])
        filename = '{}.d.ts'.format(interface_name)
        out_path = join(out_dir, filename)
        output_text = process(join(root, f), interface_name)
        print(out_path)
        count = count + 1
        with open(out_path, 'w') as out_file:
            out_file.writelines(output_text)
    print('wrote', count, 'definitions')
    print('done')


if __name__ == '__main__':
    main()