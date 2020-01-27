const constants = require('../../lib/constants')
const defaults = require('../defaults')
const file = require('../file')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['title', 'icon', 'category', 'description'],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1, maxLength: 255},
			icon: {type: 'string', minLength: 1, maxLength: 100},
			category: {type: 'string', enum: constants.BADGE_CATEGORY},
			description: {type: 'string', minLength: 1},
			rule: {anyOf: [{type: 'string', enum: constants.BADGE_RULE}, {type: 'null'}]},
			pictures: file.list
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1, maxLength: 255},
			icon: {type: 'string', minLength: 1, maxLength: 100},
			category: {type: 'string', enum: constants.BADGE_CATEGORY},
			description: {type: 'string', minLength: 1},
			rule: {anyOf: [{type: 'string', enum: constants.BADGE_RULE}, {type: 'null'}]},
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
