const node = require('./node')
const link = require('./link')

const create = {
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

const update = {
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

module.exports = {
	create,
	update,
	node,
	link
}
