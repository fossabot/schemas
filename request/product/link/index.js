const item = require('../../item')

module.exports.create = {
	type: 'object',
	required: ['id', 'buyerNodeId', 'sellerNodeId', 'quantity', 'item'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		buyerNodeId: {type: 'string', minLength: 1},
		sellerNodeId: {type: 'string', minLength: 1},
		quantity: {type: 'number', exclusiveMinimum: 0},
		item: item.create.body
	}
}
