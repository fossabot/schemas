const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('List querystring find valid schema check', t => {
	t.true(
		ajv.validate(schemas.request.badge.list.querystring, {
			page: 1,
			count: 10,
			active: true,
			sort: 'title:ASC'
		})
	)

	t.true(ajv.validate(schemas.request.badge.list.querystring, {}))
})

test('List querystring type validation', t => {
	t.false(
		ajv.validate(schemas.request.badge.list.querystring, {
			active: '1'
		})
	)

	t.false(
		ajv.validate(schemas.request.badge.list.querystring, {
			sort: 'no-col:ASC'
		})
	)
})
