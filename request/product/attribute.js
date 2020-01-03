const addAttributeValue = {
	type: 'object',
	required: ['value'],
	additionalProperties: false,
	properties: {
		value: {type: 'string', minLength: 1}
	}
}

const updateAttributeValue = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		value: {type: 'string', minLength: 1}
	}
}

module.exports.create = {
	type: 'object',
	required: ['key', 'values'],
	additionalProperties: false,
	properties: {
		key: {type: 'string', minLength: 1},
		values: {
			type: 'array',
			items: addAttributeValue
		}
	}
}

module.exports.update = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		key: {type: 'string', minLength: 1},
		values: {
			type: 'array',
			items: updateAttributeValue
		}
	}
}
