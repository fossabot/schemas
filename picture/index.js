const single = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		url: {type: 'string', minLength: 1}
	}
}

const list = {
	type: 'array',
	items: single
}

module.exports = {
	single,
	list
}
