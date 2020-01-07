const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid querystring get', t => {
	t.true(
		ajv.validate(schemas.request.tag.get.querystring, {
			existence: true
		})
	)
})

test('Invalid schema with additional proeprties', t => {
	t.false(
		ajv.validate(schemas.request.tag.get.querystring, {
			existence: true,
			additional: 'ok'
		})
	)
})

test('Valid with SKU and Product ID', t => {
	t.true(
		ajv.validate(schemas.request.tag.random.querystring, {
			productId: 'product',
			sku: 'sku'
		})
	)
})

test('Invalid if product ID is not a number', t => {
	t.false(
		ajv.validate(schemas.request.tag.random.querystring, {
			productId: 123,
			sku: 'sku'
		})
	)
})

test('List', t => {
	t.true(
		ajv.validate(schemas.request.tag.list.querystring, {
			page: 1,
			count: 10,
			lineId: 'orderline-42'
		})
	)

	// Must have line ID
	t.false(
		ajv.validate(schemas.request.tag.list.querystring, {
			page: 1,
			count: 10
		})
	)
})
