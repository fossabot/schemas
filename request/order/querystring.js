const generator = require('../../lib/generator')

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
	get,
	list
}
