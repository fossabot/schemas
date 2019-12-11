const constants = require('../../lib/constants')
const picture = require('../picture')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		description: 'Users',
		required: ['companyId', 'firstName', 'lastName', 'role', 'description', 'pictures'],
		additionalProperties: false,
		properties: {
			companyId: {type: 'string', minLength: 1},
			email: {type: ['string', 'null'], format: 'email'},
			phone: {type: ['string', 'null'], minLength: 1},
			firstName: {type: ['string', 'null'], minLength: 1},
			middleName: {type: ['string', 'null'], minLength: 1},
			lastName: {type: ['string', 'null'], minLength: 1},
			lang: {enum: constants.LANGUAGES},
			role: {enum: constants.USERROLES},
			isBlocked: {type: ['boolean', 'null']},
			password: {type: ['string', 'null'], minLength: 1},
			description: {type: 'string', minLength: 1},
			pictures: picture.list
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		description: 'Users',
		required: [],
		additionalProperties: false,
		properties: {
			companyId: {type: ['string', 'null'], minLength: 1},
			firstName: {type: ['string', 'null'], minLength: 1},
			middleName: {type: ['string', 'null'], minLength: 1},
			lastName: {type: ['string', 'null'], minLength: 1},
			lang: {enum: constants.LANGUAGES},
			role: {enum: constants.USERROLES},
			isBlocked: {type: ['boolean', 'null']},
			passwordReset: {type: ['boolean', 'null']},
			description: {type: 'string', minLength: 1},
			pictures: picture.list
		}
	}
}

module.exports.profile = {
	body: {
		type: 'object',
		description: 'Users',
		required: [],
		additionalProperties: false,
		properties: {
			companyId: {type: ['string', 'null'], minLength: 1},
			firstName: {type: ['string', 'null'], minLength: 1},
			middleName: {type: ['string', 'null'], minLength: 1},
			lastName: {type: ['string', 'null'], minLength: 1},
			lang: {enum: constants.LANGUAGES},
			role: {enum: constants.USERROLES},
			isBlocked: {type: ['boolean', 'null']},
			passwordReset: {type: ['boolean', 'null']},
			description: {type: 'string', minLength: 1},
			pictures: picture.list
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
