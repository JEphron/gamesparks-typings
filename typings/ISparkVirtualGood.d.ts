interface ISparkVirtualGood {
	getName(): string
	getDescription(): string
	getCurrency1Cost(): number
	getCurrency2Cost(): number
	getCurrency3Cost(): number
	getCurrency4Cost(): number
	getCurrency5Cost(): number
	getCurrency6Cost(): number
	getShortCode(): string
	getGooglePlayProductId(): string
	getIosAppStoreProductId(): string
	getWP8StoreProductId(): string
	getW8StoreProductId(): string
	getAmazonStoreProductId(): string
	getSteamStoreProductId(): string
	getPsnStoreProductId(): string
	getType(): string
	getTags(): string[]
	getMaxQuantity(): number
	getBundledGoods(): any
	isDisabled(): boolean
	getPropertySet(): any
}