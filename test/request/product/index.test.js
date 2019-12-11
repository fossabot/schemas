const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Create product valid schema', t => {
	t.true(
		ajv.validate(schemas.request.product.create.body, {
			supplyChainId: 'supplychain-id',
			name: 'name',
			pictures: [
				{
					id: 'FILE-ID'
				}
			],
			description: 'egg',
			attributes: []
		})
	)
})

test('Valid product schema with attributes', t => {
	t.true(
		ajv.validate(schemas.request.product.create.body, {
			supplyChainId: 'supplychain-id',
			name: 'name',
			pictures: [
				{
					id: 'FILE-ID'
				}
			],
			description: 'egg',
			attributes: [
				{
					key: 'color',
					name: 'color',
					values: [
						{
							value: 'red',
							name: 'red'
						}
					]
				}
			]
		})
	)
})

test('Products requires values for attributes', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			supplyChainId: 'supplychain-id',
			name: 'name',
			pictures: [
				{
					id: 'FILE-ID'
				}
			],
			description: 'egg',
			attributes: [
				{
					key: 'color',
					name: 'color'
				}
			]
		})
	)
})

test('Update product minimal valid schema', t => {
	t.true(
		ajv.validate(schemas.request.product.update.body, {
			name: 'product update'
		})
	)
})

test('Update product with variations', t => {
	t.true(
		ajv.validate(schemas.request.product.update.body, {
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
	)
})
