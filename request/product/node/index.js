const file = require('../../file')
const step = require('./step')

module.exports.create = {
	type: 'object',
	required: ['id', 'companyId', 'steps'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: file.list,
		// Default: The title is the company display name
		title: {type: 'string', minLength: 1},
		// Default: Description is the item name leading to this node
		description: {type: 'string', minLength: 1},
		steps: {
			type: 'array',
			items: step.create
		}
	}
}

module.exports.step = step
