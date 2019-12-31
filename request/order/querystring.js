const generator = require('../../lib/generator')

module.exports.get = {
	type: 'object',
	properties: {
		deep: {type: 'boolean', default: false},
		lines: {type: 'boolean', default: false}
	}
}

module.exports.list = {
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

module.exports.remove = {
	type: 'object',
	additionalProperties: false,
	properties: {
		orderlines: {type: 'boolean', default: false}
	}
}

module.exports.delete = {
	type: 'object',
	additionalProperties: false,
	properties: {
		orderlines: {type: 'boolean', default: false}
	}
}
