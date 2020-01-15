const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid querystring for get', t => {
	t.true(
		ajv.validate(schemas.request.order.get.querystring, {
			deep: true
		})
	)
})

test('Valid querystring for list', t => {
	t.true(
		ajv.validate(schemas.request.order.list.querystring, {
			status: 'history'
		})
	)
})

test('Invalid list query string status', t => {
	t.false(
		ajv.validate(schemas.request.order.list.querystring, {
			status: 'history1'
		})
	)
})

test('Removed status', t => {
	t.true(
		ajv.validate(schemas.request.order.list.querystring, {
			isMarkedForRemoval: true
		})
	)

	t.true(
		ajv.validate(schemas.request.order.list.querystring, {
			isMarkedForRemoval: undefined
		})
	)

	t.true(
		ajv.validate(schemas.request.order.list.querystring, {
			isMarkedForRemoval: null
		})
	)
})
