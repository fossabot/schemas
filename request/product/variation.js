const picture = require('../picture')
module.exports.single = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string'},
		sku: {type: ['string', 'null']},
		pictures: picture.list
	}
}

module.exports.list = {
	type: 'array',
	items: exports.single
}
