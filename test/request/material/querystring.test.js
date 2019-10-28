const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('List querystring is valid', t => {
	t.true(
		ajv.validate(schemas.request.material.list.querystring, {
			page: 1,
			count: 10,
			status: 'APPROVED'
		})
	)
})

test('List can called without anything', t => {
	t.true(ajv.validate(schemas.request.material.list.querystring, {}))
})

test('Status can also be an array', t => {
	t.true(
		ajv.validate(schemas.request.material.list.querystring, {
			status: ['APPROVED']
		})
	)
})

test('Status must contain a valid approval status', t => {
	t.false(
		ajv.validate(schemas.request.material.list.querystring, {
			status: 'NO STATUS'
		})
	)
})
