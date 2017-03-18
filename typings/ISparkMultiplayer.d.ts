interface ISparkMultiplayer {
	createMatch(players: ISparkPlayer[]): string
	createMatchById(playerIds: string[]): string
	createMatchWithMatchId(matchId: string, players: ISparkPlayer[]): string
	createMatchByIdWithMatchId(matchId: string, playerIds: string[]): string
	loadMatch(matchId: string): ISparkMatch
	getMatchConfig(shortCode: string): ISparkMatchConfig
	loadPendingMatchById(pendingMatchId: string): IPendingMatch
	loadPendingMatchByPlayer(player: ISparkPlayer, shortCode: string, matchGroup: string): IPendingMatch
	cancelMatchmaking(player: ISparkPlayer, shortCode: string, matchGroup: string): void
}