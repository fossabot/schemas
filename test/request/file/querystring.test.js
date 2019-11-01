const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')
const constants = require('../../../lib/constants')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid querystring for listing', t => {
	t.true(
		ajv.validate(schemas.request.file.list.querystring, {
			category: 'PRODUCT'
		})
	)
})

test('Requires a category', t => {
	t.false(ajv.validate(schemas.request.file.list.querystring, {}))
})

test('Accepts id to search in', t => {
	t.true(
		ajv.validate(schemas.request.file.list.querystring, {
			id: 'someid',
			category: constants.FILE_CATEGORY_TYPE_ENUM.PRODUCT
		})
	)
})

test('Rejects invalid category to search in', t => {
	t.false(
		ajv.validate(schemas.request.file.list.querystring, {
			category: 'Not existing'
		})
	)
})

test('Accepts pagination parameters', t => {
	t.true(
		ajv.validate(schemas.request.file.list.querystring, {
			category: constants.FILE_CATEGORY_TYPE_ENUM.PRODUCT,
			page: 2,
			count: 22
		})
	)
})
