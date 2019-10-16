const generator = require('../lib/generator')

const addAttributeValue = {
	type: 'object',
	required: ['value', 'i18n'],
	additionalProperties: false,
	properties: {
		value: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		})
	}
}

const updateAttributeValue = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		value: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		})
	}
}

const create = {
	type: 'object',
	required: ['key', 'i18n', 'values'],
	additionalProperties: false,
	properties: {
		key: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		}),
		values: {
			type: 'array',
			items: addAttributeValue
		}
	}
}

const update = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		key: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		}),
		values: {
			type: 'array',
			items: updateAttributeValue
		}
	}
}

module.exports = {
	create,
	update
}
