const Picture = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1}
	}
}

const Pictures = {
	type: 'array',
	items: Picture
}

module.exports = {
	Picture,
	Pictures
}
