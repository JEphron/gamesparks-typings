interface ISparkDownloadable {
	getShortCode(): string
	getSize(): number
	getLastModified(): Date
	getUrl(): string
}