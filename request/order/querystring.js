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
