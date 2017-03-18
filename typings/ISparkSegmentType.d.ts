interface ISparkSegmentType {
	getName(): string
	getDescription(): string
	getShortCode(): string
	getValues(): ISparkSegmentValue[]
}