module.exports.get = {
	type: 'object',
	additionalProperties: false,
	properties: {
		existence: {type: 'boolean', default: false}
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
