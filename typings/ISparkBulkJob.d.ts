interface ISparkBulkJob {
	getId(): string
	getActualCount(): number
	getCompleted(): Date
	getCreated(): Date
	getData(): any
	getDoneCount(): number
	getErrorCount(): number
	getEstimatedCount(): number
	getModuleShortCode(): string
	getPlayerQuery(): any
	getScheduledTime(): Date
	getScript(): string
	getStarted(): Date
}