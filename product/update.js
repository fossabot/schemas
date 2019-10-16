const {PictureListSchema} = require('../picture')
const generator = require('../generator')
const {ProductVariationListSchema} = require('./variation')

const ProductAttributeValueSchema = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		value: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		})
	}
}

const ProductAttributeSchema = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		key: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		}),
		values: {
			type: 'array',
			items: ProductAttributeValueSchema
		}
	}
}

const ProductUpdateSchema = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		supplyChainId: {type: 'string', minLength: 1},
		name: {type: 'string', minLength: 1, maxLength: 60},
		pictures: PictureListSchema,
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1}
		}),
		attributes: {
			type: 'array',
			items: ProductAttributeSchema,
			default: []
		},
		variations: ProductVariationListSchema
	}
}

module.exports = {
	ProductUpdateSchema
}
