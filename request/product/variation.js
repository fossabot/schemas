const file = require('../file')
module.exports.single = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string'},
		sku: {type: ['string', 'null']},
		pictures: file.list
	}
}

module.exports.list = {
	type: 'array',
	items: exports.single
}
