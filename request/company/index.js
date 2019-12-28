const constants = require('../../lib/constants')
const generator = require('../../lib/generator')
const picture = require('../picture')
const querystring = require('./querystring')

module.exports.delete = {
	querystring: querystring.delete
}

module.exports.list = {
	querystring: querystring.list,
	SORT_COLUMNS_ENUM: querystring.SORT_COLUMNS_ENUM
}

module.exports.find = {
	querystring: querystring.find
}

module.exports.create = {
	body: {
		type: 'object',
		required: ['taxNo', 'officialName', 'description', 'country', 'geojson', 'pictures'],
		additionalProperties: false,
		properties: {
			taxNo: {type: 'string', minLength: 1},
			officialName: {type: 'string', minLength: 1},
			name: {type: ['string', 'null'], minLength: 1},
			description: {type: 'string', minLength: 1},
			country: {type: 'string', enum: constants.COUNTRIES},
			county: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			city: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			zipCode: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			addressLine1: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			addressLine2: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			phone1: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			phone2: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			email: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			website: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			videoUrl: {anyOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
			geojson: generator.geoJSONFeaturePoint,
			companySize: {type: 'string', enum: constants.COMPANY_SIZE},
			companyType: {type: 'string', enum: constants.COMPANY_TYPE},
			founders: {anyOf: [{type: 'string', minLength: 1}, {type: 'null'}]},
			founded: {type: 'number', minimum: 1200, maxiumum: 2200, multipleOf: 1},
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
			videoUrl: {anyOf: [{type: 'string', format: 'uri', minLength: 1}, {type: 'null'}]},
			geojson: generator.geoJSONFeaturePoint,
			companySize: {type: 'string', enum: constants.COMPANY_SIZE},
			companyType: {type: 'string', enum: constants.COMPANY_TYPE},
			founded: {type: 'number', minimum: 1200, maxiumum: 2200, multipleOf: 1},
			pictures: picture.list
		}
	}
}
