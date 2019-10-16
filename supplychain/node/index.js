const generator = require('../../lib/generator')
const picture = require('../../picture')
const step = require('./step')

const single = {
	type: 'object',
	required: ['id', 'companyId', 'pictures', 'i18n', 'steps'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: picture.list,
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1},
			title: {type: 'string', minLength: 1}
		}),
		steps: {
			type: 'array',
			items: step.single
		}
	}
}

const singleUpdate = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: picture.list,
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1},
			title: {type: 'string', minLength: 1}
		}),
		steps: {
			type: 'array',
			items: step.single
		}
	}
}

module.exports = {
	single,
	singleUpdate,
	step
}
