interface ISparkLeaderboardPartition {
	getDescription(): string
	getName(): string
	getShortCode(): string
	getEntryCount(): number
	getEntryCountForIdentifier(identifier: string): number
	getEntries(): ISparkLeaderboardCursor
	getEntries(count: number, offset: number): ISparkLeaderboardCursor
	isPartitioned(): boolean
	isPartition(): boolean
	getPartitions(): ISparkLeaderboardPartition[]
	drop(): void
	drop(deleteRunningTotalData: boolean): void
	archive(): void
	isArchived(): boolean
	getEntriesForIdentifier(identifier: string, customIdFilter: any): ISparkLeaderboardEntry[]
	getEntriesFromPlayer(playerId: string, count: number): ISparkLeaderboardCursor
	getEntriesFromPlayerForCustomId(playerId: string, count: number, customIdFilter: any): ISparkLeaderboardCursor
	getIdFields(): string[]
	getScoreFields(): string[]
	deleteAllEntries(identifier: string, deleteRunningTotals: boolean): boolean
	deleteEntriesForCustomId(identifier: string, deleteRunningTotals: boolean, customIdFilter: any): boolean
	deleteEntry(identifier: string, deleteRunningTotals: boolean): boolean
	getPropertySet(): any
	getRankForScore(score: any): number
	rebuildLeaderboard(awardAchievements: boolean): void
}