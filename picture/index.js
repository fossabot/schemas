const PictureSchema = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1}
	}
}

const PicturesSchema = {
	type: 'array',
	items: PictureSchema
}

module.exports = {
	PictureSchema,
	PicturesSchema
}
