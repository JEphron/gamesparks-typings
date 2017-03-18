interface ISparkScheduler {
	inSeconds(shortCode: string, delaySeconds: number, data: any): boolean
	inSeconds(shortCode: string, delaySeconds: number, data: any, key: string): boolean
	cancel(key: string): void
}