const file = require('../../file')
const step = require('./step')

module.exports.create = {
	type: 'object',
	required: ['id', 'companyId'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: file.list,
		// Default: The title is the company display name
		title: {type: 'string', minLength: 1},
		// Default: Description is the item name leading to this node
		description: {type: 'string', minLength: 1},
		steps: {type: 'array', items: step.create}
	}
}

module.exports.update = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: file.list,
		// Default: The title is the company display name
		title: {type: 'string', minLength: 1},
		// Default: Description is the item name leading to this node
		description: {type: 'string', minLength: 1},
		// Steps can only be completly recreated then they are given. So there
		// is no steps update option, but only recreate option
		steps: {type: 'array', items: step.create}
	}
}

module.exports.updateLocked = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		pictures: file.list,
		// Default: The title is the company display name
		title: {type: 'string', minLength: 1},
		// Default: Description is the item name leading to this node
		description: {type: 'string', minLength: 1},
		// Steps can only be completly recreated then they are given. So there
		// is no steps update option, but only recreate option
		steps: {type: 'array', items: step.create}
	}
}

module.exports.step = step
