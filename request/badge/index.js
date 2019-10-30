const constants = require('../../lib/constants')
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
			rule: {type: 'string', enum: constants.BADGE_RULE}
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
			rule: {type: ['string', 'null'], enum: constants.BADGE_RULE}
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
