interface ISparkBulkJob {
	getId(): string
	getActualCount(): number
	getCompleted(): date
	getCreated(): date
	getData(): any
	getDoneCount(): number
	getErrorCount(): number
	getEstimatedCount(): number
	getModuleShortCode(): string
	getPlayerQuery(): any
	getScheduledTime(): date
	getScript(): string
	getStarted(): date
}