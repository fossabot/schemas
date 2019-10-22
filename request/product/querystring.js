const generator = require('../../lib/generator')

module.exports.get = {
	type: 'object',
	properties: {
		deep: {type: 'boolean', default: false},
		attributes: {type: 'boolean', default: false},
		variations: {type: 'boolean', default: false},
		orders: {type: 'boolean', default: false}
	}
}

module.exports.list = {
	type: 'object',
	properties: {
		...generator.paginationParams,
		supplyChainId: {
			type: 'string'
		},
		dropdownlist: {
			type: 'boolean',
			default: false
		}
	}
}
