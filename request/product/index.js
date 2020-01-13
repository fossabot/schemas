const defaults = require('../defaults')
const file = require('../file')
const attribute = require('./attribute')
const variation = require('./variation')
const querystring = require('./querystring')
const node = require('./node')
const link = require('./link')

module.exports.create = {
	body: {
		type: 'object',
		required: ['name', 'supplyChain'],
		additionalProperties: false,
		properties: {
			name: {type: 'string', minLength: 1, maxLength: 60},
			pictures: file.list,
			description: {type: 'string', minLength: 1},
			attributes: {type: 'array', items: attribute.create},
			supplyChain: {
				type: 'object',
				required: ['nodes', 'links'],
				additionalProperties: false,
				properties: {
					graphSerialization: {type: 'string'},
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
			attributes: {type: 'array', items: attribute.update},
			variations: variation.list,
			// The whole supply chain must be provided if there is even a single small change.
			// The item IDs of the links can match and will be reused then.
			supplyChain: {
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					graphSerialization: {type: 'string'},
					nodes: {type: 'array', items: node.update},
					// If links are given, they can only be recreated. Thus, the elements
					// will be new links
					links: {type: 'array', items: link.create}
				}
			}
		}
	}
}

// A more precises update dropping all possibilities of changing critical supplychain
// elemenst after the product as such was locked (since it's not a DRAFT any more).
module.exports.updateLocked = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			name: {type: 'string', minLength: 1, maxLength: 60},
			pictures: file.list,
			description: {type: 'string', minLength: 1},
			attributes: {type: 'array', items: attribute.update},
			variations: variation.list,
			supplyChain: {
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					graphSerialization: {type: 'string'},
					nodes: {type: 'array', items: node.updateLocked}
				}
			}
		}
	}
}

module.exports.get = {
	querystring: querystring.get
}

module.exports.request = defaults.request
module.exports.approve = defaults.approve
module.exports.reject = defaults.reject

module.exports.list = {
	querystring: querystring.list,
	SORT_COLUMNS_ENUM: querystring.SORT_COLUMNS_ENUM
}

module.exports.attribute = attribute

module.exports.variation = variation

module.exports.node = node

module.exports.link = link
