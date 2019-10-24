const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.list = {
	type: 'object',
	required: ['q'],
	properties: {
		q: {type: 'string', minLength: 1},
		dropdown: {type: 'boolean', default: false},
		category: {type: 'string', enum: constants.SEARCH_ASSET_TYPE},
		...generator.paginationParams
	}
}
