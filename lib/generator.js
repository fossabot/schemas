const constants = require('./constants')

module.exports.paginationParams = {
	page: {
		type: 'number',
		minimum: 0,
		default: constants.PAGINATION.defaultPage
	},
	count: {
		type: 'number',
		maximum: constants.PAGINATION.maxCount,
		minimum: 0,
		default: constants.PAGINATION.defaultCount
	}
}

module.exports.i18n = translations => ({
	type: 'array',
	items: {
		type: 'object',
		required: ['language'].concat(Object.keys(translations)),
		additionalProperties: false,
		properties: {
			language: {type: 'string', enum: constants.LANGUAGES},
			...translations
		}
	}
})
