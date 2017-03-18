interface ISparkTeam {
	getOwnerId(): string
	getTeamId(): string
	getTeamName(): string
	getTeamType(): string
	getMemberIds(): string[]
	setOwnerId(playerId: string): boolean
	setTeamName(teamName: string): boolean
	addMembers(playerIds: string[]): void
	removeMembers(playerIds: string[]): void
	drop(): boolean
	listChatMessages(count: number, offset: number): IChatMessage[]
	getChatMessage(chatMessageId: string): any
	deleteChatMessage(chatMessageId: string): boolean
	addAchievement(achievementShortCode: string): boolean
	removeAchievement(achievementShortCode: string): boolean
}