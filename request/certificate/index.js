const picture = require('../picture')
const defaults = require('../defaults')
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
			pictures: picture.list,
			statusComment: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]}
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
			pictures: picture.list,
			statusComment: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]}
		}
	}
}

module.exports.request = defaults.request
module.exports.approve = defaults.approve
module.exports.reject = defaults.reject
module.exports.acknowledge = defaults.acknowledge
module.exports.remove = defaults.remove

module.exports.list = {
	querystring: querystring.list
}
