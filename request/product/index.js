const generator = require('../../lib/generator')
const picture = require('../picture')
const attribute = require('./attribute')
const variation = require('./variation')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['supplyChainId', 'name', 'pictures', 'attributes'],
		additionalProperties: false,
		properties: {
			supplyChainId: {type: 'string', minLength: 1},
			name: {type: 'string', minLength: 1, maxLength: 60},
			pictures: picture.list,
			i18n: generator.i18n({
				description: {type: 'string', minLength: 1}
			}),
			attributes: {
				type: 'array',
				items: attribute.create,
				default: []
			}
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			id: {type: 'string', minLength: 1},
			supplyChainId: {type: 'string', minLength: 1},
			name: {type: 'string', minLength: 1, maxLength: 60},
			pictures: picture.list,
			i18n: generator.i18n({
				description: {type: 'string', minLength: 1}
			}),
			attributes: {
				type: 'array',
				items: attribute.update
			},
			variations: variation.list
		}
	}
}

module.exports.get = {
	querystring: querystring.get
}

module.exports.list = {
	querystring: querystring.list
}
module.exports.attribute = attribute
module.exports.variation = variation
