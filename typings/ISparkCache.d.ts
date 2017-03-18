interface ISparkCache {
	put(key: string, object: any): void
	get(key: string): any
	remove(key: string): void
	removeAll(): void
	removeAll(pattern: string): void
}