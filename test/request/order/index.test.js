const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid order create schema', t => {
	t.true(
		ajv.validate(schemas.request.order.create.body, {
			variations: [
				{
					id: 'id',
					quantity: 10
				}
			]
		})
	)
})

test('Quantity must be a number', t => {
	t.false(
		ajv.validate(schemas.request.order.create.body, {
			variations: [
				{
					id: 'id',
					quantity: '100a'
				}
			]
		})
	)
})

test('Variation must be provided', t => {
	t.false(ajv.validate(schemas.request.order.create.body, {}))
})

test('Valid status update schema', t => {
	t.true(
		ajv.validate(schemas.request.order.accept.body, {
			fileId: 'FILE-ID',
			updatedAt: '2019-10-13T20:20:39+00:00'
		})
	)
})

test('Update date must be provided for status change', t => {
	t.false(
		ajv.validate(schemas.request.order.accept.body, {
			fileId: 'FILE-ID'
		})
	)
})

test('Update date must be date-time format', t => {
	t.false(
		ajv.validate(schemas.request.order.accept.body, {
			fileId: 'FILE-ID',
			updatedAt: 'this-is-time'
		})
	)
})
