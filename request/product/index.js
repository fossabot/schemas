const file = require('../file')
const attribute = require('./attribute')
const variation = require('./variation')
const querystring = require('./querystring')
const node = require('./node')
const link = require('./link')

module.exports.create = {
	body: {
		type: 'object',
		required: ['name', 'pictures', 'attributes', 'supplychain'],
		additionalProperties: false,
		properties: {
			name: {type: 'string', minLength: 1, maxLength: 60},
			pictures: file.list,
			description: {type: 'string', minLength: 1},
			attributes: {
				type: 'array',
				items: attribute.create,
				default: []
			},
			supplychain: {
				type: 'object',
				required: ['nodes', 'links'],
				additionalProperties: false,
				properties: {
					nodes: {type: 'array', minItems: 2, items: node.create},
					links: {type: 'array', minItems: 1, items: link.create}
				}
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
			name: {type: 'string', minLength: 1, maxLength: 60},
			pictures: file.list,
			description: {type: 'string', minLength: 1},
			attributes: {
				type: 'array',
				items: attribute.update
			},
			variations: variation.list,
			// The whole supply chain must be provided if there is even a single small change.
			// The item IDs of the links can match and will be reused then.
			supplychain: {
				type: 'object',
				required: ['nodes', 'links'],
				additionalProperties: false,
				properties: {
					nodes: {type: 'array', minItems: 2, items: node.create},
					links: {type: 'array', minItems: 1, items: link.create}
				}
			}
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

module.exports.node = node

module.exports.link = link
