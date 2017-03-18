interface ISparkMongoCollectionReadWrite {
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
	findAndModify(query: any, update: any): any
	findAndModify(query: any, sort: any, update: any): any
	findAndModify(query: any, fields: any, sort: any, remove: boolean, update: any, returnNew: boolean, upsert: boolean): any
	findAndRemove(query: any): any
	insert(documents: any[]): boolean
	aggregate(firstOp: any, additionalOps: any[]): any
	applyChanges(existingDocument: any, newDocument: any): boolean
	getIndexInfo(): any
	getLastError(): any
	save(document: any): boolean
	remove(query: any): boolean
	drop(): void
	update(query: any, update: any): boolean
	update(query: any, update: any, upsert: boolean, multi: boolean): boolean
	updateMulti(query: any, update: any): boolean
}