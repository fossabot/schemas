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
			count: 10
		})
	)
})

test('List can called without anything', t => {
	t.true(ajv.validate(schemas.request.material.list.querystring, {}))
})
