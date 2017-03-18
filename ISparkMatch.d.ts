interface ISparkMatch {
	getId(): string
	getParticipants(): ISparkParticipant[]
	getServer(): ISparkRealtimeServer
	addPlayers(players: ISparkPlayer[]): void
	addPlayersById(playerIds: string[]): void
	removePlayers(players: ISparkPlayer[]): void
	removePlayersById(playerIds: string[]): void
	enableRealtime(script: string): void
	enableRealtime(): void
	getMatchData(): any
	isRealtimeEnabled(): boolean
	setMatchData(matchData: any): void
}