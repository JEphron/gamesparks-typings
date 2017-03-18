interface ISparkLeaderboardOperations {
	union(rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	union(rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	intersection(rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	intersection(rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	difference(rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	difference(rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	evaluate(): string[]
}