const node = require('./node')
const link = require('./link')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['name', 'entrySupplyNodeId', 'nodes', 'links'],
		additionalProperties: false,
		properties: {
			name: {type: 'string', minLength: 1},
			entrySupplyNodeId: {type: 'string', minLength: 1},
			nodes: {
				type: 'array',
				items: node.single
			},
			links: {
				type: 'array',
				items: link.single
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
			name: {type: 'string', minLength: 1},
			nodes: {
				type: 'array',
				items: node.singleUpdate
			},
			links: {
				type: 'array',
				items: link.singleUpdate
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
module.exports.node = node

module.exports.link = link
