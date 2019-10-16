const {PictureListSchema} = require('../picture')
const generator = require('../generator')

const ProductAttributeValueSchema = {
	type: 'object',
	required: ['value', 'i18n'],
	additionalProperties: false,
	properties: {
		value: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			name: {type: 'string', minLength: 1}
		})
	}
}

const ProductAttributeSchema = {
	type: 'object',
	required: ['key', 'i18n', 'values'],
	additionalProperties: false,
	properties: {
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

const ProductCreateSchema = {
	type: 'object',
	required: ['supplyChainId', 'name', 'pictures', 'attributes'],
	additionalProperties: false,
	properties: {
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
		}
	}
}

module.exports = {
	ProductCreateSchema
}
