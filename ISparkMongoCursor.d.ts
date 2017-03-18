interface ISparkMongoCursor {
	limit(count: number): ISparkMongoCursor
	skip(count: number): ISparkMongoCursor
	size(): number
	count(): number
	sort(orderBy: any): ISparkMongoCursor
	hasNext(): boolean
	next(): any
	curr(): any
}