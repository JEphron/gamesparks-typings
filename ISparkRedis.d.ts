interface ISparkRedis {
	append(key: string, value: string): number
	bitcount(key: string): number
	bitcount(key: string, start: number, end: number): number
	bitop(op: string, destKey: string, srcKeys: string[]): number
	decr(key: string): number
	decrBy(key: string, integer: number): number
	del(keys: string[]): number
	exists(key: string): boolean
	expire(key: string, seconds: number): number
	expireAt(key: string, unixTime: number): number
	flushdb(): string
	get(key: string): string
	getbit(key: string, offset: number): boolean
	getrange(key: string, startOffset: number, endOffset: number): string
	hdel(key: string, fields: string[]): number
	hexists(key: string, field: string): boolean
	hget(key: string, field: string): string
	hgetAll(key: string): string[]
	hincrBy(key: string, field: string, value: number): number
	hincrByFloat(key: string, field: string, increment: number): number
	hkeys(key: string): string[]
	hlen(key: string): number
	hmget(key: string, fields: string[]): string[]
	hmset(key: string, hash: any): string
	hset(key: string, field: string, value: string): number
	hsetnx(key: string, field: string, value: string): number
	hvals(key: string): string[]
	incr(key: string): number
	incrBy(key: string, integer: number): number
	incrByFloat(key: string, increment: number): number
	keys(pattern: string): string[]
	lindex(key: string, index: number): string
	linsert(key: string, where: string, pivit: string, value: string): number
	llen(key: string): number
	lpop(key: string): string
	lpush(key: string, strings: string[]): number
	lpushx(key: string, strings: string[]): number
	lrange(key: string, start: number, end: number): string[]
	lrem(key: string, count: number, value: string): number
	lset(key: string, index: number, value: string): string
	ltrim(key: string, start: number, end: number): string
	mget(keys: string[]): string[]
	mset(keysvalues: string[]): string
	msetnx(keysvalues: string[]): number
	persist(key: string): number
	pexpire(key: string, milliseconds: number): number
	pexpireAt(key: string, millisecondsTimestamp: number): number
	psetex(key: string, milliseconds: number, value: string): string
	pttl(key: string): number
	rename(oldkey: string, newkey: string): string
	renamenx(oldkey: string, newkey: string): number
	rpop(key: string): string
	rpoplpush(srckey: string, dstkey: string): string
	rpush(key: string, strings: string[]): number
	rpushx(key: string, strings: string[]): number
	sadd(key: string, members: string[]): number
	scard(key: string): number
	sdiff(keys: string[]): string[]
	sdiffstore(dstkey: string, keys: string[]): number
	set(key: string, value: string, nxxx: string, expx: string, time: number): string
	set(key: string, value: string, nxxx: string): string
	set(key: string, value: string, nxxx: string, expx: string, time: number): string
	set(key: string, value: string): string
	getSet(key: string, value: string): string
	setbit(key: string, offset: number, value: boolean): boolean
	setex(key: string, seconds: number, value: string): string
	setnx(key: string, value: string): number
	setrange(key: string, offset: number, value: string): number
	sinter(keys: string[]): string[]
	sinterstore(dstkey: string, keys: string[]): number
	sismember(key: string, member: string): boolean
	smembers(key: string): string[]
	smove(srckey: string, dstkey: string, member: string): number
	sort(key: string, dstkey: string): number
	sort(key: string): string[]
	spop(key: string): string
	srandmember(key: string, count: number): string[]
	srandmember(key: string): string
	srem(key: string, members: string[]): number
	strlen(key: string): number
	substr(key: string, start: number, end: number): string
	sunion(keys: string[]): string[]
	sunionstore(dstkey: string, keys: string[]): number
	ttl(key: string): number
	type(key: string): string
	zadd(key: string, score: number, member: string): number
	zcard(key: string): number
	zcount(key: string, min: number, max: number): number
	zcount(key: string, min: string, max: string): number
	zincrby(key: string, score: number, member: string): number
	zinterstore(dstkey: string, sets: string[]): number
	zrange(key: string, start: number, end: number): string[]
	zrangeByScore(key: string, min: number, max: number): string[]
	zrangeByScore(key: string, min: string, max: string): string[]
	zrangeByScore(key: string, min: number, max: number, offset: number, count: number): string[]
	zrangeByScore(key: string, min: string, max: string, offset: number, count: number): string[]
	zrangeByScoreWithScores(key: string, min: number, max: number, offset: number, count: number): any
	zrangeByScoreWithScores(key: string, min: number, max: number): any
	zrangeByScoreWithScores(key: string, min: string, max: string): any
	zrangeByScoreWithScores(key: string, min: string, max: string, offset: number, count: number): any
	zrangeWithScores(key: string, start: number, end: number): any
	zrank(key: string, member: string): number
	zrem(key: string, members: string[]): number
	zremrangeByRank(key: string, start: number, end: number): number
	zremrangeByScore(key: string, start: number, end: number): number
	zremrangeByScore(key: string, start: string, end: string): number
	zrevrange(key: string, start: number, end: number): string[]
	zrevrangeByScore(key: string, max: string, min: string, offset: number, count: number): string[]
	zrevrangeByScore(key: string, max: string, min: string): string[]
	zrevrangeByScore(key: string, max: number, min: number, offset: number, count: number): string[]
	zrevrangeByScore(key: string, max: number, min: number): string[]
	zrevrangeByScoreWithScores(key: string, max: number, min: number): any
	zrevrangeByScoreWithScores(key: string, max: number, min: number, offset: number, count: number): any
	zrevrangeByScoreWithScores(key: string, max: string, min: string, offset: number, count: number): any
	zrevrangeByScoreWithScores(key: string, max: string, min: string): any
	zrevrangeWithScores(key: string, start: number, end: number): any
	zrevrank(key: string, member: string): number
	zscore(key: string, member: string): number
	zunionstore(dstkey: string, sets: string[]): number
}