interface ISparkXmlReader {
	registerCallback(path: string, startCallback: Function): void
	process(): void
	getElement(): any
	getXml(): any
}