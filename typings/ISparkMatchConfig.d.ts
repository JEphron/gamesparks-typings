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
	getThresholds(): List
	createPendingMatch(matchGroup: string, skill: number, players: ISparkPlayerI]): [PendingMatch
	createPendingMatchWithCustomQuery(matchGroup: string, skill: number, customQuery: any, matchData: any, players: ISparkPlayerI]): [PendingMatch
}