const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

const validSupplyChain = {
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
			supplyChain: validSupplyChain
		})
	)
})

test('Validate supplyChain', t => {
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
			supplyChain: null
		})
	)

	t.false(
		ajv.validate(schemas.request.product.create.body, {
			name: 'name',
			pictures: [{id: 'FILE-ID'}],
			description: 'egg',
			attributes: [],
			supplyChain: {
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
			supplyChain: {
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
			supplyChain: validSupplyChain
		})
	)

	// Can leave out attribute name and attribute value name
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
					values: [
						{
							value: 'red'
						}
					]
				}
			],
			supplyChain: validSupplyChain
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
			supplyChain: validSupplyChain
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

test('Update supplyChain', t => {
	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: validSupplyChain
		})
	)

	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: null
		})
	)

	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				nodes: [],
				links: []
			}
		})
	)

	// Must have at least two nodes and one link
	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
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
			supplyChain: {
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
