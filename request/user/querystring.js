const generator = require('../../lib/generator')

const list = {
	type: 'object',
	properties: {
		...generator.paginationParams,
		dropdownlist: {type: 'boolean', default: false},
		role: {type: ['string', 'null']},
		companyId: {type: ['string', 'null']}
	}
}

module.exports = {
	list
}
