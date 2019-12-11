const constants = require('../../../lib/constants')

module.exports.single = {
	type: 'object',
	required: ['quantity', 'unit', 'buyerNodeId', 'sellerNodeId', 'asset'],
	additionalProperties: false,
	properties: {
		quantity: {type: 'number', exclusiveMinimum: 0},
		unit: {enum: constants.UNITS},
		buyerNodeId: {type: 'string', minLength: 1},
		sellerNodeId: {type: 'string', minLength: 1},
		asset: {type: 'string', minLength: 1}
	}
}

module.exports.singleUpdate = {
	type: 'object',
	required: ['id', 'asset'],
	additionalProperties: false,
	properties: {
		id: {type: 'string'},
		asset: {type: 'string', minLength: 1}
	}
}
