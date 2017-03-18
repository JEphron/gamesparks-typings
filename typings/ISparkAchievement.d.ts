interface ISparkAchievement {
	getName(): string
	getDescription(): string
	getShortCode(): string
	getCurrency1Award(): number
	getCurrency2Award(): number
	getCurrency3Award(): number
	getCurrency4Award(): number
	getCurrency5Award(): number
	getCurrency6Award(): number
	getPropertySet(): any
	getVirtualGoodAward(): ISparkVirtualGood
}