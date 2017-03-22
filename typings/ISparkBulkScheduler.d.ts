interface ISparkBulkScheduler {
	submitJobModule(playerQuery: any, module: string, data: any, delaySeconds: number): string
	submitJobScript(playerQuery: any, script: string, data: any, delaySeconds: number): string
	cancelJob(jobId: string): boolean
	listBulkJobs(jobIds: string[]): ISparkBulkJob[]
}