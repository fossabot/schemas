const generator = require('../../lib/generator')

module.exports.list = {
	type: 'object',
	properties: {
		...generator.paginationParams,
		dropdownlist: {type: 'boolean', default: false},
		role: {type: ['string', 'null']},
		companyId: {type: ['string', 'null']}
	}
}
