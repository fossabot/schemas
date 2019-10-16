const ProductVariationSchema = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string'},
		sku: {type: ['string', 'null']}
	}
}

const ProductVariationListSchema = {
	type: 'array',
	items: ProductVariationSchema
}

module.exports = {
	ProductVariationSchema,
	ProductVariationListSchema
}
