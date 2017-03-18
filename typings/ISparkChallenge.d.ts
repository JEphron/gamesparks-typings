interface ISparkChallenge {
	getRunState(): string
	getId(): string
	getShortCode(): string
	winChallenge(winner: ISparkPlayer): void
	drawChallenge(): void
	startChallenge(): void
	getChallengedPlayerIds(): string[]
	getAcceptedPlayerIds(): string[]
	getDeclinedPlayerIds(): string[]
	getChallengerId(): string
	getEndDate(): Date
	getExpiryDate(): Date
	getStartDate(): Date
	consumeTurn(playerId: string): boolean
	takeTurn(playerId: string): boolean
	removePlayer(playerId: string): boolean
	getPrivateData(name: string): any
	setPrivateData(name: string, value: any): void
	removePrivateData(name: string): void
	getScriptData(name: string): any
	setScriptData(name: string, value: any): void
	removeScriptData(name: string): void
}