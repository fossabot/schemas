const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

const validSupplyChain = {
	graphSerialization: '{"id":"d84d7ab0-84e5-4193-9711-d1fc7d655f75","offsetX":0,"offsetY":0}',
	nodes: [
		{
			id: 'node-ID',
			companyId: 'COM-cano',
			pictures: [{id: 'FILE-ID'}],
			description: 'description',
			title: 'title'
		},
		{
			id: 'node-ID1',
			companyId: 'COM-calzado',
			pictures: [{id: 'FILE-ID'}],
			description: 'description',
			title: 'title'
		}
	],
	links: [
		{
			id: 'id',
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
			supplyChain: validSupplyChain
		})
	)

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
						title: 'title'
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
					key: 'color'
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

	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				nodes: [],
				links: []
			}
		})
	)

	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				graphSerialization: '{"id":"d84d7ab0-84e5-4193-9711-d1fc7d655f75","offsetX":0,"offsetY":0}'
			}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: null
		})
	)

	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				nodes: [
					{
						id: 'node-ID',
						companyId: 'COM-cano',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title'
					}
				],
				links: []
			}
		})
	)

	// Update works without changing the company of the node
	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				nodes: [
					{
						id: 'node-ID',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title'
					}
				]
			}
		})
	)

	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				links: [
					{
						id: 'id',
						buyerNodeId: 'node-ID',
						sellerNodeId: 'node-ID1',
						quantity: 1,
						item: {
							id: 'id'
						}
					}
				]
			}
		})
	)

	// Can also set a receiver company ID
	t.true(
		ajv.validate(schemas.request.product.update.body, {
			supplyChain: {
				links: [
					{
						id: 'id',
						buyerNodeId: 'node-ID',
						sellerNodeId: 'node-ID1',
						receiverCompanyId: 'id',
						quantity: 1,
						item: {
							id: 'id'
						}
					}
				]
			}
		})
	)
})

test('Update product with attributes', t => {
	t.true(
		ajv.validate(schemas.request.product.update.body, {
			attributes: [
				{
					id: '12',
					key: 'key',
					values: [{id: '12', value: 'value'}]
				}
			]
		})
	)
})

test('Update locked product minimal valid schema', t => {
	t.true(
		ajv.validate(schemas.request.product.updateLocked.body, {
			name: 'product update when product not DRAFT'
		})
	)
})

test('Update locked product with variations', t => {
	t.true(
		ajv.validate(schemas.request.product.updateLocked.body, {
			variations: [
				{
					id: 'variation-id',
					sku: 'variation-sku',
					pictures: [{id: 'id'}]
				},
				{
					id: 'variation-id-2',
					sku: 'variation-sku-2',
					pictures: [{id: 'id'}]
				}
			]
		})
	)
})

test('Update locked product with attributes', t => {
	t.true(
		ajv.validate(schemas.request.product.updateLocked.body, {
			attributes: [
				{
					id: '12',
					key: 'key',
					values: [{id: '12', value: 'value'}]
				}
			]
		})
	)
})

test('Update locked products supplyChain', t => {
	t.true(
		ajv.validate(schemas.request.product.updateLocked.body, {
			supplyChain: {
				graphSerialization: '{"id":"d84d7ab0-84e5-4193-9711-d1fc7d655f75","offsetX":0,"offsetY":0}',
				nodes: [
					{
						id: 'node-ID',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title'
					},
					{
						id: 'node-ID1',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title'
					}
				]
			}
		})
	)

	t.true(
		ajv.validate(schemas.request.product.updateLocked.body, {
			supplyChain: {
				graphSerialization: '{"id":"d84d7ab0-84e5-4193-9711-d1fc7d655f75","offsetX":0,"offsetY":0}'
			}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.updateLocked.body, {
			supplyChain: null
		})
	)

	// Update works without changing the company of the node
	t.true(
		ajv.validate(schemas.request.product.updateLocked.body, {
			supplyChain: {
				nodes: [
					{
						id: 'node-ID',
						pictures: [{id: 'FILE-ID'}],
						description: 'description',
						title: 'title'
					}
				]
			}
		})
	)
})

test('Update locked products supplychain is limited', t => {
	// Not allowed to send company ID in nodes
	t.false(
		ajv.validate(schemas.request.product.updateLocked.body, {
			supplyChain: {
				nodes: [
					{
						id: 'node-ID',
						companyId: 'id'
					}
				]
			}
		})
	)

	// Does not allow sending links
	t.false(
		ajv.validate(schemas.request.product.updateLocked.body, {
			supplyChain: {
				links: []
			}
		})
	)
})
