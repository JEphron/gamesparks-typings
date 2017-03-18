interface ISpark {
	getPlayer(): ISparkPlayer
	loadPlayer(playerId: string): ISparkPlayer
	loadPlayerByExternalId(externalSystem: string, externalId: string): ISparkPlayer
	getChallenge(challengeInstanceId: string): ISparkChallenge
	sendMessage(data: any, players: ISparkPlayer[]): void
	sendMessageExt(data: any, extCode: string, players: ISparkPlayer[]): void
	sendMessageWithoutPush(data: any, players: ISparkPlayer[]): void
	sendMessageById(data: any, playerIds: string[]): void
	sendMessageByIdExt(data: any, extCode: string, playerIds: string[]): void
	sendMessageByIdWithoutPush(data: any, playerIds: string[]): void
	message(extCode: string): ISparkMessage
	save(collectionName: string, document: any): boolean
	remove(collectionName: string, query: any): boolean
	find(collectionName: string, query: any): any
	find(collectionName: string, query: any, projection: any): any
	lock(challenge: ISparkChallenge): void
	unlock(challenge: ISparkChallenge): void
	lockKey(lockName: string, tryMillis: number): boolean
	unlockKey(lockName: string): boolean
	unlockKeyFully(lockName: string): boolean
	hasScriptErrors(): boolean
	setScriptError(key: string, value: any): void
	getScriptError(key: string): any
	removeScriptError(key: string): void
	removeAllScriptErrors(): void
	getLog(): ISparkLog
	getPlayerIds(): string[]
	logEvent(eventKey: string, values: any): void
	getHttp(url: string): ISparkHttp
	dismissMessage(messageId: string): boolean
	runtimeCollection(collectionName: string): ISparkMongoCollectionReadWrite
	metaCollection(collectionName: string): ISparkMongoCollectionReadOnly
	getFiles(): ISparkFiles
	uploadedXml(uploadId: string): ISparkXmlReader
	uploadedJson(uploadId: string): any
	downloadableXml(shortCode: string): ISparkXmlReader
	downloadableJson(shortCode: string): any
	sendGrid(username: string, password: string): ISendGrid
	getScheduler(): ISparkScheduler
	getCache(): ISparkCache
	sendRequest(request: any): any
	sendRequestAs(request: any, playerId: string): any
	getRedis(): ISparkRedis
	getLeaderboards(): ISparkLeaderboards
	getConfig(): ISparkConfig
	getTeams(): ISparkTeams
	getMultiplayer(): ISparkMultiplayer
	getProperties(): ISparkProperties
	getBulkScheduler(): ISparkBulkScheduler
	getDigester(): ISparkDigest
	getCredentialType(): string
	getSessionId(): string
	getUploadableUtils(): SparkUploadableUtils
	exit(): void
	getScriptData(name: string): any
	setScriptData(name: string, value: any): void
	removeScriptData(name: string): void
	removeAllScriptData(): void
	getRemainingMilliseconds(): number
	getData(): any
}