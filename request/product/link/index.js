const item = require('../../item')

module.exports.create = {
	type: 'object',
	required: ['buyerNodeId', 'sellerNodeId', 'quantity', 'item'],
	additionalProperties: false,
	properties: {
		buyerNodeId: {type: 'string', minLength: 1},
		sellerNodeId: {type: 'string', minLength: 1},
		quantity: {type: 'number', exclusiveMinimum: 0},
		item: item.create
	}
}
