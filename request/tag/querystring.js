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
		productId: {type: 'string', minLength: 1},
		productVersion: {type: 'number', minimum: 1, multipleOf: 1},
		sku: {type: 'string', minLength: 1}
	}
}
