interface ISparkLeaderboards {
	getLeaderboard(shortCode: string): ISparkLeaderboard
	getSocialLeaderboard(shortCode: string, friendIds: stringI]): [SparkLeaderboard
	getInverseSocialLeaderboard(shortCode: string, friendIds: stringI]): [SparkLeaderboard
	getSocialLeaderboardAs(shortCode: string, playerId: string, friendIds: stringI]): [SparkLeaderboard
	getInverseSocialLeaderboardAs(shortCode: string, playerId: string, friendIds: stringI]): [SparkLeaderboard
	getTeamLeaderboard(shortCode: string, teamIds: stringI]): [SparkLeaderboard
	getInverseTeamLeaderboard(shortCode: string, teamIds: stringI]): [SparkLeaderboard
	getTeamLeaderboardAs(shortCode: string, playerId: string, teamIds: stringI]): [SparkLeaderboard
	getInverseTeamLeaderboardAs(shortCode: string, playerId: string, teamIds: stringI]): [SparkLeaderboard
	listLeaderboards(): ISparkLeaderboard[]
	getChallengeLeaderboard(challengeInstanceId: string): ISparkLeaderboard
	getSocialChallengeLeaderboard(challengeInstanceId: string, friendsIds: stringI]): [SparkLeaderboard
	union(lhs: ISparkLeaderboard, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	union(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	union(lhs: ISparkLeaderboard, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	union(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	getInverseSocialChallengeLeaderboard(challengeInstanceId: string, friendsIds: stringI]): [SparkLeaderboard
	getSocialChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, friendIds: stringI]): [SparkLeaderboard
	getInverseSocialChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, friendIds: stringI]): [SparkLeaderboard
	getTeamChallengeLeaderboard(challengeInstanceId: string, teamIds: stringI]): [SparkLeaderboard
	getInverseTeamChallengeLeaderboard(challengeInstanceId: string, teamIds: stringI]): [SparkLeaderboard
	intersection(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	intersection(lhs: ISparkLeaderboard, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	intersection(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	intersection(lhs: ISparkLeaderboard, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	getTeamChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, teamIds: stringI]): [SparkLeaderboard
	getInverseTeamChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, teamIds: stringI]): [SparkLeaderboard
	difference(lhs: ISparkLeaderboard, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	difference(lhs: ISparkLeaderboard, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	difference(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	difference(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
}