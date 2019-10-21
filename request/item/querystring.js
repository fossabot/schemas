const get = {
	type: 'object',
	additionalProperties: false,
	properties: {
		existence: {type: 'boolean', default: false}
	}
}

const random = {
	type: 'object',
	additionalProperties: false,
	properties: {
		productId: {type: 'string'},
		sku: {type: 'string'}
	}
}

module.exports = {
	get,
	random
}
