const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Minimal schema', t => {
	t.true(
		ajv.validate(schemas.request.product.node.create, {
			id: 'node-ID',
			companyId: 'COM-cano',
			steps: []
		})
	)
})

test('Extensive schema', t => {
	t.true(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			companyId: 'id',
			pictures: [{id: 'id'}],
			description: 'description',
			steps: [
				{
					pictures: [{id: 'FILE-ID'}],
					shortDescription: 'short',
					longDescription: 'long',
					employees: [{id: 'id'}, {id: 'id'}]
				}
			]
		})
	)
})

test('Missing parameters', t => {
	t.false(
		ajv.validate(schemas.request.product.node.create, {
			companyId: 'id',
			steps: []
		})
	)

	t.false(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			steps: []
		})
	)

	t.false(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			companyId: 'id'
		})
	)
})
