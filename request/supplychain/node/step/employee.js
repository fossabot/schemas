module.exports.single = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1}
	}
}
