interface ISparkChallengeType {
	getShortCode(): string
	getName(): string
	getDescription(): string
	isTurnBased(): boolean
	getAttemptConsumers(): string
	isGlobal(): boolean
}