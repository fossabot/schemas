const generator = require('../../lib/generator')

const get = {
	type: 'object',
	properties: {
		deep: {type: 'boolean', default: false},
		nodes: {type: 'boolean', default: false},
		links: {type: 'boolean', default: false}
	}
}

const list = {
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

module.exports = {
	get,
	list
}
