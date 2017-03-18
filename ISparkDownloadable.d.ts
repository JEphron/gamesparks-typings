interface ISparkDownloadable {
	getShortCode(): string
	getSize(): number
	getLastModified(): date
	getUrl(): string
}