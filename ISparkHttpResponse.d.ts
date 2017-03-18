interface ISparkHttpResponse {
	getHeaders(): any
	getResponseCode(): number
	getResponseString(): string
	getResponseXml(): any
	getResponseJson(): any
}