interface ISparkLog {
	debug(msg: any): void
	info(msg: any): void
	warn(msg: any): void
	error(msg: any): void
	getLevel(): string
	setLevel(level: string): void
}