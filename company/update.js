const {PictureListSchema} = require('../picture')
const generator = require('../generator')

const CompanyUpdateSchema = {
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
		pictures: PictureListSchema
	}
}

module.exports = {
	CompanyUpdateSchema
}
