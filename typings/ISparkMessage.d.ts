interface ISparkMessage {
	setSendViaSocket(value: boolean): ISparkMessage
	setSendAsPush(value: boolean): ISparkMessage
	setSupressPushOnSocketSend(value: boolean): ISparkMessage
	setIncludeInPushCount(value: boolean): ISparkMessage
	setExpireAfterHours(hours: number): ISparkMessage
	setDeviceTypes(deviceTypes: stringI]): [SparkMessage
	setMessageData(data: any): ISparkMessage
	setPlayerIds(playerIds: stringI]): [SparkMessage
	send(): void
}