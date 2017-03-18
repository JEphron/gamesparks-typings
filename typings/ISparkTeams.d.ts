interface ISparkTeams {
	getTeam(teamId: string): ISparkTeam
	getTeamByOwnerIdAndTeamType(ownerId: string, teamType: string): ISparkTeam[]
}