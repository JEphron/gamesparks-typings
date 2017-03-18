interface ISparkLeaderboardEntry {
	getUserId(): string
	getUserName(): string
	getRank(): number
	getRankPercentage(): number
	getWhen(): string
	getAttribute(name: string): any
}