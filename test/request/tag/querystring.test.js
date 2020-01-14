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

	t.true(
		ajv.validate(schemas.request.tag.random.querystring, {
			productId: 'product',
			productVersion: 2,
			sku: 'sku'
		})
	)

	// It is possible to query product version without ID
	t.true(
		ajv.validate(schemas.request.tag.random.querystring, {
			productVersion: 2
		})
	)
})

test('Random invalid query params', t => {
	// Product ID must be string
	t.false(
		ajv.validate(schemas.request.tag.random.querystring, {
			productId: 123,
			sku: 'sku'
		})
	)

	// Product version must be number
	t.false(
		ajv.validate(schemas.request.tag.random.querystring, {
			productId: 'id',
			productVersion: '1',
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
