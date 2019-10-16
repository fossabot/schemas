const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testProductVariationSchema = () => {
	const isValid = ajv.validate(schemas.product.variation.single, {
		id: 'variation-id',
		sku: 'sku'
	})

	assert.strictEqual(isValid, true)
}

exports.testProductVariationSchemaWithoutId = () => {
	const isValid = ajv.validate(schemas.product.variation.single, {
		sku: 'sku'
	})

	assert.strictEqual(isValid, false, 'variation id is not provided')
}

exports.testProductCreateSchemaWithoutAttributes = () => {
	const isValid = ajv.validate(schemas.product.create, {
		supplyChainId: 'supplychain-id',
		name: 'name',
		pictures: [
			{
				id: 'FILE-ID'
			}
		],
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		attributes: []
	})

	assert.strictEqual(isValid, true)
}

exports.testProductCreateSchemaWithAttributes = () => {
	const isValid = ajv.validate(schemas.product.create, {
		supplyChainId: 'supplychain-id',
		name: 'name',
		pictures: [
			{
				id: 'FILE-ID'
			}
		],
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		attributes: [
			{
				key: 'color',
				i18n: [
					{
						language: 'en',
						name: 'color'
					}
				],
				values: [
					{
						value: 'red',
						i18n: [
							{
								language: 'en',
								name: 'red'
							}
						]
					}
				]
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testProductCreateSchemaWithInValidAttributes = () => {
	const isValid = ajv.validate(schemas.product.create, {
		supplyChainId: 'supplychain-id',
		name: 'name',
		pictures: [
			{
				id: 'FILE-ID'
			}
		],
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		attributes: [
			{
				key: 'color',
				i18n: [
					{
						language: 'en',
						name: 'color'
					}
				]
			}
		]
	})

	assert.strictEqual(isValid, false, 'invalid attribute values')
}

exports.testProductUpdateSchema = () => {
	const isValid = ajv.validate(schemas.product.update, {
		name: 'product update'
	})

	assert.strictEqual(isValid, true)
}
