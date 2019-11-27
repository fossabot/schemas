const constants = require('../../lib/constants')
const picture = require('../picture')
const querystring = require('./querystring')

module.exports.get = {
	querystring: querystring.get
}

module.exports.delete = {
	querystring: querystring.delete
}

module.exports.list = {
	querystring: querystring.list
}

module.exports.find = {
	querystring: querystring.find
}

module.exports.create = {
	body: {
		type: 'object',
		required: ['taxNo', 'officialName', 'description', 'country', 'longitude', 'latitude', 'pictures'],
		additionalProperties: false,
		properties: {
			taxNo: {type: 'string', minLength: 1},
			officialName: {type: 'string', minLength: 1},
			name: {type: ['string', 'null'], minLength: 1},
			description: {type: 'string', minLength: 1},
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
			name: {type: 'string', minLength: 1},
			description: {type: 'string', minLength: 1},
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
			pictures: picture.list
		}
	}
}
