interface ISparkTeams {
	getTeam(teamId: string): IISparkTeam
	getTeamByOwnerIdAndTeamType(ownerId: string, teamType: string): IISparkTeam[]
}