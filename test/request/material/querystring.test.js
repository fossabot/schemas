const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('List querystring find valid schema check', t => {
	t.true(
		ajv.validate(schemas.request.material.list.querystring, {
			page: 1,
			count: 10,
			status: 'DRAFT,REQUESTED',
			sort: 'version:ASC',
			isMarkedForRemoval: false,
			isActive: true,
			isDropDown: true
		})
	)

	t.true(ajv.validate(schemas.request.material.list.querystring, {}))
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
