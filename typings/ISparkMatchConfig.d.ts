interface ISparkMatchConfig {
	getShortCode(): string
	getName(): string
	getDescription(): string
	getMinPlayers(): number
	getMaxPlayers(): number
	getRealtime(): boolean
	getRealtimeScript(): string
	getDropInDropOut(): boolean
	getDropInDropOutExpire(): number
	getManuallyMatch(): boolean
	getPlayerDisconnectThreshold(): number
	getThresholds(): string[]
	createPendingMatch(matchGroup: string, skill: number, players: ISparkPlayer[]): IPendingMatch
	createPendingMatchWithCustomQuery(matchGroup: string, skill: number, customQuery: any, matchData: any, players: ISparkPlayer[]): IPendingMatch
}
