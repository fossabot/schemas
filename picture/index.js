const PictureSchema = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1}
	}
}

const PictureListSchema = {
	type: 'array',
	items: PictureSchema
}

module.exports = {
	PictureSchema,
	PictureListSchema
}
