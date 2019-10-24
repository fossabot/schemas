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
		ajv.validate(schemas.request.search.list.querystring, {
			q: 'search term'
		})
	)
})

test('Requires a search term', t => {
	t.false(ajv.validate(schemas.request.search.list.querystring, {}))
})

test('Accepts category to search in', t => {
	t.true(
		ajv.validate(schemas.request.search.list.querystring, {
			q: 'search term',
			category: constants.SEARCH_ASSET_TYPE_ENUM.MATERIAL
		})
	)
})

test('Rejects invalid category to search in', t => {
	t.false(
		ajv.validate(schemas.request.search.list.querystring, {
			q: 'search term',
			category: 'Not existing'
		})
	)
})

test('Accepts to return a dropdown list', t => {
	t.true(
		ajv.validate(schemas.request.search.list.querystring, {
			q: 'search term',
			dropdown: true
		})
	)
})

test('Accepts pagination parameters', t => {
	t.true(
		ajv.validate(schemas.request.search.list.querystring, {
			q: 'search term',
			page: 2,
			count: 22
		})
	)
})

test('Accepts a big request with pagination and category and term', t => {
	t.true(
		ajv.validate(schemas.request.search.list.querystring, {
			q: 'search term',
			category: constants.SEARCH_ASSET_TYPE_ENUM.MATERIAL,
			page: 2,
			count: 22
		})
	)
})
