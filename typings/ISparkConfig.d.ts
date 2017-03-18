interface ISparkConfig {
	getStage(): string
	getApiKey(): string
	getVirtualGoods(): any
	getVirtualGood(shortCode: string): ISparkVirtualGood
	getAchievements(): any
	getAchievement(shortCode: string): ISparkAchievement
	getSegments(): any
	getSegment(shortCode: string): ISparkSegmentType
	getTeams(): any
	getTeam(shortCode: string): ISparkTeamType
	getChallenges(): any
	getChallenge(shortCode: string): ISparkChallengeType
	getDownloadable(shortCode: string): ISparkDownloadable
	getDownloadables(): ISparkDownloadable[]
	getMatchConfigs(): any
	getMatchConfig(shortCode: string): ISparkMatchConfig
}