const node = require('./node')
const link = require('./link')
const querystring = require('./querystring')

const create = {
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

const update = {
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

const get = {
	querystring: querystring.get
}

const list = {
	querystring: querystring.list
}

module.exports = {
	create,
	update,
	get,
	list,
	node,
	link
}
