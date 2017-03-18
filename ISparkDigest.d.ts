interface ISparkDigest {
	hmacMd5Base64(key: string, valueToDigest: string): string
	hmacMd5Hex(key: string, valueToDigest: string): string
	hmacSha1Base64(key: string, valueToDigest: string): string
	hmacSha1Hex(key: string, valueToDigest: string): string
	hmacSha256Base64(key: string, valueToDigest: string): string
	hmacSha256Hex(key: string, valueToDigest: string): string
	hmacSha384Base64(key: string, valueToDigest: string): string
	hmacSha384Hex(key: string, valueToDigest: string): string
	hmacSha512Base64(key: string, valueToDigest: string): string
	hmacSha512Hex(key: string, valueToDigest: string): string
	md2Base64(data: string): string
	md2Hex(data: string): string
	md5Base64(data: string): string
	md5Hex(data: string): string
	sha1Base64(data: string): string
	sha1Hex(data: string): string
	sha256Base64(data: string): string
	sha256Hex(data: string): string
	sha384Base64(data: string): string
	sha384Hex(data: string): string
	sha512Base64(data: string): string
	sha512Hex(data: string): string
}