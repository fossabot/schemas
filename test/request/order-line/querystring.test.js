const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid querystring for list', t => {
	t.true(
		ajv.validate(schemas.request.orderLine.list.querystring, {
			orderId: 'FILE-ID',
			status: 'to-seperate'
		})
	)
})

test('Querystring list requires order ID', t => {
	t.false(
		ajv.validate(schemas.request.orderLine.list.querystring, {
			status: 'to-seperate'
		})
	)
})

test('Querystring list requires a valid status', t => {
	t.false(
		ajv.validate(schemas.request.orderLine.list.querystring, {
			orderId: 'FILE-ID',
			status: 'to-seperate1'
		})
	)
})
