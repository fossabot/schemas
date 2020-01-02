const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

const validSupplychain = {
	nodes: [
		{
			id: 'node-ID',
			companyId: 'COM-cano',
			pictures: [{id: 'FILE-ID'}],
			description: 'description',
			title: 'title',
			steps: []
		},
		{
			id: 'node-ID1',
			companyId: 'COM-calzado',
			pictures: [{id: 'FILE-ID'}],
			description: 'description',
			title: 'title',
			steps: []
		}
	],
	links: [
		{
			buyerNodeId: 'node-ID',
			sellerNodeId: 'node-ID1',
			quantity: 1,
			item: {
				id: 'id'
			}
		}
	]
}

test('Create product valid schema', t => {
	t.true(
		ajv.validate(schemas.request.product.create.body, {
			name: 'name',
			pictures: [{id: 'FILE-ID'}],
			description: 'egg',
			attributes: [],
			supplychain: validSupplychain
		})
	)
})

test('Validate supplychain', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			name: 'name',
			pictures: [{id: 'FILE-ID'}],
			description: 'egg',
			attributes: []
		})
	)

	t.false(
		ajv.validate(schemas.request.product.create.body, {
			name: 'name',
			pictures: [{id: 'FILE-ID'}],
			description: 'egg',
			attributes: [],
			supplychain: null
		})
	)

	t.false(
		ajv.validate(schemas.request.product.create.body, {
			name: 'name',
			pictures: [{id: 'FILE-ID'}],
			description: 'egg',
			attributes: [],
			supplychain: {
				nodes: [],
				links: []
			}
		})
	)

	// Must have at least two nodes and one link
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			name: 'name',
			pictures: [{id: 'FILE-ID'}],
			description: 'egg',
			attributes: [],
			supplychain: {
				nodes: [
					{
						id: 'node-ID',
						companyId: 'COM-cano',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title',
						steps: []
					}
				],
				links: []
			}
		})
	)
})

test('Valid product schema with attributes', t => {
	t.true(
		ajv.validate(schemas.request.product.create.body, {
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
			],
			supplychain: validSupplychain
		})
	)
})

test('Products requires values for attributes', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
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
			],
			supplychain: validSupplychain
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

test('Update supplychain', t => {
	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplychain: validSupplychain
		})
	)

	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplychain: null
		})
	)

	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplychain: {
				nodes: [],
				links: []
			}
		})
	)

	// Must have at least two nodes and one link
	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplychain: {
				nodes: [
					{
						id: 'node-ID',
						companyId: 'COM-cano',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title',
						steps: []
					}
				],
				links: []
			}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplychain: {
				nodes: [
					{
						id: 'node-ID',
						companyId: 'COM-cano',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title',
						steps: []
					},
					{
						id: 'node-ID',
						companyId: 'COM-cano',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title',
						steps: []
					}
				],
				links: []
			}
		})
	)
})
