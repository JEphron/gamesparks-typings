interface ISparkTeamType {
	getShortCode(): string
	getName(): string
	getSocial(): boolean
	getExtendedSocial(): boolean
	getMaxMembers(): number
	getMaxMembershipPerUser(): number
	getMaxOwnershipPerUser(): number
}