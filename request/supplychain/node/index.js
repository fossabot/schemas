const picture = require('../../picture')
const step = require('./step')

module.exports.single = {
	type: 'object',
	required: ['id', 'companyId', 'pictures', 'steps'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: picture.list,
		description: {type: 'string', minLength: 1},
		title: {type: 'string', minLength: 1},
		steps: {
			type: 'array',
			items: step.single
		}
	}
}

module.exports.singleUpdate = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: picture.list,
		description: {type: 'string', minLength: 1},
		title: {type: 'string', minLength: 1},
		steps: {
			type: 'array',
			items: step.single
		}
	}
}

module.exports.step = step
