interface ISparkLeaderboardCursor {
	hasNext(): boolean
	next(): ISparkLeaderboardEntry
}