const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.list = {
	type: 'object',
	required: ['category'],
	properties: {
		...generator.paginationParams,
		category: {type: 'string', enum: constants.FILE_CATEGORY_TYPE},
		id: {type: ['string', 'null']}
	}
}
