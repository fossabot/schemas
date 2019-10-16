const Company = require('./company')
const Item = require('./item')
const Order = require('./order')
const Picture = require('./picture')
const Product = require('./product')
const Setting = require('./setting')
const SupplyChain = require('./supplychain')
const User = require('./user')
const Upload = require('./upload')

const Schemas = {
	company: Company,
	item: Item,
	order: Order,
	picture: Picture,
	product: Product,
	setting: Setting,
	supplychain: SupplyChain,
	user: User,
	upload: Upload
}

module.exports = Schemas
