interface IPendingMatch {
	getId(): string
	getMatchShortCode(): string
	getMatchGroup(): string
	getSkill(): number
	getMatchedPlayers(): SparkMatchedPlayer[]
	joinPendingMatch(pendingMatchToJoin: IPendingMatch): IPendingMatch
	findPendingMatches(maxMatchesToFind: number): SparkPendingMatch[]
}