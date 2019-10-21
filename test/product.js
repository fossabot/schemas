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
	const isValid = ajv.validate(schemas.product.create.body, {
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
	const isValid = ajv.validate(schemas.product.create.body, {
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
	const isValid = ajv.validate(schemas.product.create.body, {
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
	const isValid = ajv.validate(schemas.product.update.body, {
		name: 'product update'
	})

	assert.strictEqual(isValid, true)
}

exports.testProductUpdateSchemaWithVariations = () => {
	const isValid = ajv.validate(schemas.product.update.body, {
		variations: [
			{
				id: 'variation-id',
				sku: 'variation-sku',
				pictures: [
					{
						id: 'FILE-VARIATION-ID'
					}
				]
			},
			{
				id: 'variation-id-2',
				sku: 'variation-sku-2',
				pictures: [
					{
						id: 'FILE-VARIATION-ID-2'
					}
				]
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringList = () => {
	const isValid = ajv.validate(schemas.product.list.querystring, {
		dropdownlist: true
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringListInvalidDropdown = () => {
	const isValid = ajv.validate(schemas.product.list.querystring, {
		dropdownlist: 'string'
	})

	assert.strictEqual(isValid, false, 'dropdownlist value must be boolean type')
}
