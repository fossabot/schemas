const constants = require('../../lib/constants')
const defaults = require('../defaults')
const picture = require('../picture')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['title', 'icon', 'category', 'description'],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1},
			icon: {type: 'string', minLength: 1},
			category: {type: 'string', enum: constants.BADGE_CATEGORY},
			description: {type: 'string', minLength: 1},
			rule: {oneOf: [{type: 'string', enum: constants.BADGE_RULE}, {type: 'null'}]},
			pictures: picture.list
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			title: {type: 'string', minLength: 1},
			icon: {type: 'string', minLength: 1},
			category: {type: 'string', enum: constants.BADGE_CATEGORY},
			description: {type: 'string', minLength: 1},
			rule: {oneOf: [{type: 'string', enum: constants.BADGE_RULE}, {type: 'null'}]},
			pictures: picture.list
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
