const Company = require('./company')
const Item = require('./item')
const OrderLine = require('./order-line')
const Order = require('./order')
const Picture = require('./picture')
const Product = require('./product')
const Setting = require('./setting')
const SupplyChain = require('./supplychain')
const User = require('./user')
const UploadUrl = require('./upload-url')
const material = require('./material')
const search = require('./search')

module.exports = {
	company: Company,
	item: Item,
	orderLine: OrderLine,
	order: Order,
	picture: Picture,
	product: Product,
	setting: Setting,
	supplychain: SupplyChain,
	user: User,
	uploadUrl: UploadUrl,
	material,
	search
}
