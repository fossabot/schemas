const generator = require('../../lib/generator')

module.exports.get = {
	type: 'object',
	additionalProperties: false,
	properties: {
		existence: {type: 'boolean', default: false}
	}
}

module.exports.list = {
	type: 'object',
	required: ['lineId'],
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		lineId: {type: 'string', minLength: 1}
	}
}

module.exports.random = {
	type: 'object',
	additionalProperties: false,
	properties: {
		productId: {type: 'string'},
		sku: {type: 'string'}
	}
}
