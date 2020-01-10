const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Minimal schema', t => {
	t.true(
		ajv.validate(schemas.request.product.link.create, {
			id: 'id',
			buyerNodeId: 'id',
			sellerNodeId: 'id',
			quantity: 1,
			item: {id: 'id'}
		})
	)
})

test('Missing parameters', t => {
	t.false(
		ajv.validate(schemas.request.product.node.create, {
			buyerNodeId: 'id',
			sellerNodeId: 'id',
			quantity: 1,
			item: {id: 'id'}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			sellerNodeId: 'id',
			quantity: 1,
			item: {id: 'id'}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			buyerNodeId: 'id',
			quantity: 1,
			item: {id: 'id'}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			buyerNodeId: 'id',
			sellerNodeId: 'id',
			item: {id: 'id'}
		})
	)

	t.false(
		ajv.validate(schemas.request.product.node.create, {
			id: 'id',
			buyerNodeId: 'id',
			sellerNodeId: 'id',
			quantity: 1
		})
	)
})

test('Missing sub structures', t => {
	t.false(
		ajv.validate(schemas.request.product.link.create, {
			id: 'id',
			buyerNodeId: 'id',
			sellerNodeId: 'id',
			quantity: 1,
			item: {}
		})
	)
})
