interface ISparkMongoCollectionReadOnly {
	count(): number
	count(query: any): number
	distinct(key: string): any
	distinct(key: string, query: any): any
	dropIndex(keys: any): void
	dropIndexByName(name: string): void
	ensureIndex(keys: any): void
	ensureIndex(keys: any, optionsIN: any): void
	find(): ISparkMongoCursor
	find(query: any): ISparkMongoCursor
	find(query: any, fields: any): ISparkMongoCursor
	findOne(): any
	findOne(query: any): any
	findOne(query: any, fields: any): any
	findOne(query: any, fields: any, orderBy: any): any
	aggregate(firstOp: any, additionalOps: any[]): any
	getIndexInfo(): any
	getLastError(): any
}