const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid create schema', t => {
	t.true(
		ajv.validate(schemas.request.tag.create.body, {
			lineId: 'line-id',
			ids: ['id', 'id1']
		})
	)
})

test('Invalid schema without IDs', t => {
	t.false(
		ajv.validate(schemas.request.tag.create.body, {
			lineId: 'line-id'
		})
	)
})

test('Invalid schema without line ID', t => {
	t.false(
		ajv.validate(schemas.request.tag.create.body, {
			ids: ['id', 'id1']
		})
	)
})
