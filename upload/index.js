const constants = require('../constants')

const UploadUrlSchema = {
	type: 'object',
	required: ['filename'],
	additionalProperties: false,
	properties: {
		filename: {
			type: 'string',
			pattern: `.(${constants.FILE_EXTENSIONS.join('|')})$`
		},
		longitude: {
			type: 'number'
		},
		latitude: {
			type: 'number'
		}
	}
}
module.exports = {
	UploadUrlSchema
}
