const picture = require('../picture')
const constants = require('../lib/constants')
const generator = require('../lib/generator')

const create = {
	type: 'object',
	description: 'Users',
	required: ['companyId', 'firstName', 'lastName', 'role', 'i18n', 'pictures'],
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
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1}
		}),
		pictures: picture.list
	}
}

const update = {
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
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1}
		}),
		pictures: picture.list
	}
}

const profile = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		firstName: {
			type: ['string', 'null'],
			minLength: 1
		},
		middleName: {
			type: ['string', 'null'],
			minLength: 1
		},
		lastName: {
			type: ['string', 'null'],
			minLength: 1
		},
		lang: {
			enum: constants.LANGUAGES
		}
	}
}

module.exports = {
	create,
	update,
	profile
}
