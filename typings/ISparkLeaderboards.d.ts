interface ISparkLeaderboards {
	getLeaderboard(shortCode: string): ISparkLeaderboard
	getSocialLeaderboard(shortCode: string, friendIds: string[]): ISparkLeaderboard
	getInverseSocialLeaderboard(shortCode: string, friendIds: string[]): ISparkLeaderboard
	getSocialLeaderboardAs(shortCode: string, playerId: string, friendIds: string[]): ISparkLeaderboard
	getInverseSocialLeaderboardAs(shortCode: string, playerId: string, friendIds: string[]): ISparkLeaderboard
	getTeamLeaderboard(shortCode: string, teamIds: string[]): ISparkLeaderboard
	getInverseTeamLeaderboard(shortCode: string, teamIds: string[]): ISparkLeaderboard
	getTeamLeaderboardAs(shortCode: string, playerId: string, teamIds: string[]): ISparkLeaderboard
	getInverseTeamLeaderboardAs(shortCode: string, playerId: string, teamIds: string[]): ISparkLeaderboard
	listLeaderboards(): ISparkLeaderboard[]
	getChallengeLeaderboard(challengeInstanceId: string): ISparkLeaderboard
	getSocialChallengeLeaderboard(challengeInstanceId: string, friendsIds: string[]): ISparkLeaderboard
	union(lhs: ISparkLeaderboard, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	union(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	union(lhs: ISparkLeaderboard, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	union(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	getInverseSocialChallengeLeaderboard(challengeInstanceId: string, friendsIds: string[]): ISparkLeaderboard
	getSocialChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, friendIds: string[]): ISparkLeaderboard
	getInverseSocialChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, friendIds: string[]): ISparkLeaderboard
	getTeamChallengeLeaderboard(challengeInstanceId: string, teamIds: string[]): ISparkLeaderboard
	getInverseTeamChallengeLeaderboard(challengeInstanceId: string, teamIds: string[]): ISparkLeaderboard
	intersection(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	intersection(lhs: ISparkLeaderboard, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	intersection(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	intersection(lhs: ISparkLeaderboard, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	getTeamChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, teamIds: string[]): ISparkLeaderboard
	getInverseTeamChallengeLeaderboardAs(challengeInstanceId: string, playerId: string, teamIds: string[]): ISparkLeaderboard
	difference(lhs: ISparkLeaderboard, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	difference(lhs: ISparkLeaderboard, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
	difference(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboard): ISparkLeaderboardOperations
	difference(lhs: ISparkLeaderboardOperations, rhs: ISparkLeaderboardOperations): ISparkLeaderboardOperations
}