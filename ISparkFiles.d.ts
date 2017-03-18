interface ISparkFiles {
	deleteUploadedFile(uploadId: string): boolean
	uploadedXml(uploadId: string): ISparkXmlReader
	uploadedJson(uploadId: string): any
	downloadableXml(shortCode: string): ISparkXmlReader
	downloadableJson(shortCode: string): any
}