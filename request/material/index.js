const constants = require('../../lib/constants')
const picture = require('../picture')

module.exports.create = {
	body: {
		type: 'object',
		required: ['title', 'description', 'externalLink', 'categories', 'pictures'],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1},
			description: {type: 'string', minLength: 1},
			externalLink: {oneOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
			categories: {type: 'array', items: {type: 'string', enum: constants.MATERIAL_CATEGORIES}},
			pictures: picture.list
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1},
			description: {type: 'string', minLength: 1},
			externalLink: {oneOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
			categories: {type: 'array', items: {type: 'string', enum: constants.MATERIAL_CATEGORIES}},
			pictures: picture.list
		}
	}
}
