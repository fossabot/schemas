const constants = require('../constants')
const generator = require('../generator')
const {PictureListSchema} = require('../picture')

const CompanyCreateSchema = {
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
		pictures: PictureListSchema
	}
}

module.exports = {
	CompanyCreateSchema
}
