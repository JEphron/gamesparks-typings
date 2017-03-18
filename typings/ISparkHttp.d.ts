interface ISparkHttp {
	setBasicAuth(username: string, password: string): ISparkHttp
	setHeaders(headers: any): ISparkHttp
	get(): ISparkHttpResponse
	postForm(form: any): ISparkHttpResponse
	postXml(form: XMLObject): ISparkHttpResponse
	postJson(form: any): ISparkHttpResponse
	postString(data: string): ISparkHttpResponse
	putForm(form: any): ISparkHttpResponse
	putXml(form: XMLObject): ISparkHttpResponse
	putJson(form: any): ISparkHttpResponse
	putString(data: string): ISparkHttpResponse
	delete(): ISparkHttpResponse
}