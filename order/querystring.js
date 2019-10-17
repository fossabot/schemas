const generator = require('../lib/generator')

const listOrderLines = {
	type: 'object',
	additionalProperties: false,
	required: ['orderId'],
	properties: {
		orderId: {type: 'string'},
		status: {enum: ['to-seperate']}
	}
}

const get = {
	type: 'object',
	properties: {
		deep: {type: 'boolean', default: false},
		lines: {type: 'boolean', default: false}
	}
}

const list = {
	type: 'object',
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		status: {
			type: ['string', 'null'],
			enum: ['recently-changed', 'history', 'to-seperate']
		}
	}
}

module.exports = {
	listOrderLines,
	get,
	list
}
