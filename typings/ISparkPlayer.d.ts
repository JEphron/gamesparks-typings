interface ISparkPlayer {
	getDisplayName(): string
	persist(): void
	getUserName(): string
	getPlayerId(): string
	credit1(quantity: number): void
	credit1(quantity: number, reason: string): void
	debit1(quantity: number): boolean
	debit1(quantity: number, reason: string): boolean
	credit2(quantity: number): void
	credit2(quantity: number, reason: string): void
	debit2(quantity: number): boolean
	debit2(quantity: number, reason: string): boolean
	credit3(quantity: number): void
	credit3(quantity: number, reason: string): void
	debit3(quantity: number, reason: string): boolean
	debit3(quantity: number): boolean
	credit4(quantity: number, reason: string): void
	credit4(quantity: number): void
	credit5(quantity: number): void
	credit5(quantity: number, reason: string): void
	credit6(quantity: number, reason: string): void
	credit6(quantity: number): void
	debit4(quantity: number): boolean
	debit4(quantity: number, reason: string): boolean
	debit5(quantity: number): boolean
	debit5(quantity: number, reason: string): boolean
	debit6(quantity: number, reason: string): boolean
	debit6(quantity: number): boolean
	getBalance1(): number
	getBalance2(): number
	getBalance3(): number
	getBalance4(): number
	getBalance5(): number
	getBalance6(): number
	addVGood(shortCode: string, quantity: number, reason: string): boolean
	addVGood(shortCode: string, quantity: number): boolean
	useVGood(shortCode: string, quantity: number, reason: string): boolean
	useVGood(shortCode: string, quantity: number): boolean
	hasVGood(shortCode: string): number
	addAchievement(shortCode: string): boolean
	removeAchievement(shortCode: string): boolean
	hasAchievement(shortCode: string): boolean
	dismissMessage(messageId: string): boolean
	getExternalIds(): any
	getFriendIds(): any
	isOnline(): boolean
	validatePassword(password: string): boolean
	setPassword(password: string): void
	isHiddenOnLeaderboards(): boolean
	hideOnLeaderboards(): void
	showOnLeaderboards(): void
	getPushRegistrations(): ISparkPushRegistration[]
	removePushRegistration(id: string): void
	setSegmentValue(segmentType: string, segmentValue: string): void
	getSegmentValue(segmentType: string): string
	getSegments(): any
	disconnect(excludeCurrent: boolean): void
	getAchievements(): string[]
	getVirtualGoods(): any
	resetAuthTokens(): void
	resetAuthTokens(excludeCurrent: boolean): void
	getLastSeen(): Date
	unlock(): void
	getCreationDate(): Date
	matchesMongoQuery(mongoQuery: ScriptableObject): boolean
	matchesMongoQueryString(mongoQueryString: string): boolean
	getExperimentSegments(): ISparkPlayerExperimentSegment[]
	removeExperiment(experimentId: number): boolean
	setExperimentSegment(experimentId: number, experimentSegmentName: string): boolean
	deletePlayer(): void
	getPrivateData(name: string): any
	setPrivateData(name: string, value: any): void
	removePrivateData(name: string): void
	getScriptData(name: string): any
	setScriptData(name: string, value: any): void
	removeScriptData(name: string): void
}