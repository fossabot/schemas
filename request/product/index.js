const generator = require('../../lib/generator')
const picture = require('../picture')
const attribute = require('./attribute')
const variation = require('./variation')
const querystring = require('./querystring')

const create = {
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

const update = {
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

const get = {
	querystring: querystring.get
}

const list = {
	querystring: querystring.list
}

module.exports = {
	attribute,
	create,
	update,
	get,
	list,
	variation
}
