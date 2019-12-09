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
			status: 'DRAFT,REQUESTED',
			sort: 'version:ASC',
			isMarkedForRemoval: false,
			isArchived: true,
			isActive: true,
			isDropDown: true
		})
	)

	t.true(ajv.validate(schemas.request.badge.list.querystring, {}))
})

test('List querystring type validation', t => {
	t.false(
		ajv.validate(schemas.request.badge.list.querystring, {
			sort: 'no-col:ASC'
		})
	)
})
