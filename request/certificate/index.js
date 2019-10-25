const picture = require('../picture')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['title', 'description', 'externalLink', 'pictures'],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1},
			description: {type: 'string', minLength: 1},
			externalLink: {oneOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
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
			pictures: picture.list
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
