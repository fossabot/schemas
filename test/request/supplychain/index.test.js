const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid create schema', t => {
	t.true(
		ajv.validate(schemas.request.supplychain.create.body, {
			name: 'name',
			entrySupplyNodeId: 'node-Cano',
			nodes: [
				{
					id: 'node-ID',
					companyId: 'COM-cano',
					pictures: [
						{
							id: 'FILE-ID'
						}
					],
					i18n: [
						{
							language: 'en',
							description: 'description',
							title: 'title'
						}
					],
					steps: []
				},
				{
					id: 'node-ID1',
					companyId: 'COM-calzado',
					pictures: [
						{
							id: 'FILE-ID'
						}
					],
					i18n: [
						{
							language: 'en',
							description: 'description',
							title: 'title'
						}
					],
					steps: []
				}
			],
			links: [
				{
					quantity: 1,
					unit: 'PRODUCT',
					buyerNodeId: 'node-ID',
					sellerNodeId: 'node-ID1',
					i18n: [
						{
							language: 'en',
							asset: 'Leather'
						}
					]
				}
			]
		})
	)
})

test('Supply node is invalid', t => {
	t.false(
		ajv.validate(schemas.request.supplychain.create.body, {
			name: 'name',
			entrySupplyNodeId: 'node-Cano',
			nodes: [
				{
					id: 'node-ID',
					companyId: 'COM-cano',
					pictures: [
						{
							id: 'FILE-ID'
						}
					],
					i18n: [
						{
							language: 'en',
							description: 'description',
							title: 'title'
						}
					],
					steps: []
				},
				{
					id: 'node-ID1',
					companyId: 'COM-calzado',
					pictures: [
						{
							id: 'FILE-ID'
						}
					],
					i18n: [
						{
							language: 'en',
							description: 'description',
							title: 'title'
						}
					],
					steps: []
				}
			],
			links: [
				{
					quantity: 1,
					buyerNodeId: 'node-ID',
					sellerNodeId: 'node-ID1',
					i18n: [
						{
							language: 'en',
							asset: 'Leather'
						}
					]
				}
			]
		})
	)
})

test('Valid update schema', t => {
	t.true(
		ajv.validate(schemas.request.supplychain.update.body, {
			name: 'name update',
			nodes: [
				{
					id: 'node-ID',
					companyId: 'COM-cano',
					pictures: [
						{
							id: 'FILE-ID'
						}
					],
					i18n: [
						{
							language: 'en',
							description: 'description',
							title: 'title'
						}
					],
					steps: []
				},
				{
					id: 'node-ID1',
					companyId: 'COM-calzado',
					pictures: [
						{
							id: 'FILE-ID'
						}
					],
					i18n: [
						{
							language: 'en',
							description: 'description',
							title: 'title'
						}
					],
					steps: []
				}
			],
			links: [
				{
					id: 'link-id',
					i18n: [
						{
							language: 'en',
							asset: 'Leather update'
						}
					]
				}
			]
		})
	)
})
