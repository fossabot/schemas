const picture = require('../picture')
const single = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string'},
		sku: {type: ['string', 'null']},
		pictures: picture.list
	}
}

const list = {
	type: 'array',
	items: single
}

module.exports = {
	single,
	list
}
