const generator = require('../../lib/generator')

module.exports.get = {
	type: 'object',
	properties: {
		deep: {type: 'boolean', default: false},
		nodes: {type: 'boolean', default: false},
		links: {type: 'boolean', default: false}
	}
}

module.exports.list = {
	type: 'object',
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		dropdownlist: {
			type: 'boolean',
			default: false
		}
	}
}
