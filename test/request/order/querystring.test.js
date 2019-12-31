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

test('Query strings for remove', t => {
	t.true(
		ajv.validate(schemas.request.order.remove.querystring, {
			orderlines: true
		})
	)
})

test('Query strings for delete', t => {
	t.true(
		ajv.validate(schemas.request.order.delete.querystring, {
			orderlines: true
		})
	)
})
