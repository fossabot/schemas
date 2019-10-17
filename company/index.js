const constants = require('../lib/constants')
const generator = require('../lib/generator')
const picture = require('../picture')
const querystring = require('./querystring')

const create = {
	type: 'object',
	required: ['taxNo', 'officialName', 'country', 'longitude', 'latitude', 'i18n', 'pictures'],
	additionalProperties: false,
	properties: {
		taxNo: {type: 'string', minLength: 1},
		officialName: {type: 'string', minLength: 1},
		name: {type: ['string', 'null'], minLength: 1},
		country: {type: 'string', enum: constants.COUNTRIES},
		county: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		city: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		zipCode: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		addressLine1: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		addressLine2: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		phone1: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		phone2: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		email: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		website: {oneOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
		longitude: {type: 'number'},
		latitude: {type: 'number'},
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1}
		}),
		pictures: picture.list
	}
}

const update = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		name: {type: ['string', 'null'], minLength: 1},
		county: {type: ['string', 'null'], minLength: 1},
		city: {type: ['string', 'null'], minLength: 1},
		zipCode: {type: ['string', 'null'], minLength: 1},
		addressLine1: {type: ['string', 'null'], minLength: 1},
		addressLine2: {type: ['string', 'null'], minLength: 1},
		phone1: {type: ['string', 'null'], minLength: 1},
		phone2: {type: ['string', 'null'], minLength: 1},
		email: {type: ['string', 'null'], minLength: 1},
		website: {type: ['string', 'null'], minLength: 1},
		longitude: {type: 'number'},
		latitude: {type: 'number'},
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1}
		}),
		pictures: picture.list
	}
}

module.exports = {
	create,
	update,
	querystring
}
