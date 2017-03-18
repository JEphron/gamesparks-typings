interface ISparkMessage {
	setSendViaSocket(value: boolean): ISparkMessage
	setSendAsPush(value: boolean): ISparkMessage
	setSupressPushOnSocketSend(value: boolean): ISparkMessage
	setIncludeInPushCount(value: boolean): ISparkMessage
	setExpireAfterHours(hours: number): ISparkMessage
	setDeviceTypes(deviceTypes: string[]): ISparkMessage
	setMessageData(data: any): ISparkMessage
	setPlayerIds(playerIds: string[]): ISparkMessage
	send(): void
}