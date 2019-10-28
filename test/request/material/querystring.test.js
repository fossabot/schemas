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
			status: 'APPROVED',
			sort: 'status:DESC'
		})
	)
})

test('List can called without anything', t => {
	t.true(ajv.validate(schemas.request.material.list.querystring, {}))
})

test('Status can also be an array', t => {
	t.true(
		ajv.validate(schemas.request.material.list.querystring, {
			status: 'APPROVED,REQUESTED'
		})
	)
})

test('Sort columns can be an array', t => {
	t.true(
		ajv.validate(schemas.request.material.list.querystring, {
			sort: 'status:DESC,updatedAt:ASC'
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

test('Sort columns must be valid columns', t => {
	t.false(
		ajv.validate(schemas.request.material.list.querystring, {
			sort: 'notAvailable:DESC'
		})
	)
})

test('Sort columns must be valid sort order', t => {
	t.false(
		ajv.validate(schemas.request.material.list.querystring, {
			sort: 'status:CRUX'
		})
	)
})
