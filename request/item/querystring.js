const generator = require('../../lib/generator')

module.exports.list = {
	type: 'object',
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		isDropDown: {
			type: 'boolean',
			default: false
		},
		isMarkedForRemoval: {type: ['boolean', 'null'], default: false}
	}
}
