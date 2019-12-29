const constants = require('../../lib/constants')
const defaults = require('../defaults')
const file = require('../file')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['title', 'description'],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1},
			description: {type: 'string', minLength: 1},
			externalLink: {anyOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
			categories: {type: 'array', items: {type: 'string', enum: constants.MATERIAL_CATEGORIES}},
			pictures: file.list
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
			externalLink: {anyOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
			categories: {type: 'array', items: {type: 'string', enum: constants.MATERIAL_CATEGORIES}},
			pictures: file.list
		}
	}
}

module.exports.request = defaults.request
module.exports.approve = defaults.approve
module.exports.reject = defaults.reject
module.exports.acknowledge = defaults.acknowledge

module.exports.list = {
	querystring: querystring.list,
	SORT_COLUMNS_ENUM: querystring.SORT_COLUMNS_ENUM
}
