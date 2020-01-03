const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid minimal schema', t => {
	t.true(ajv.validate(schemas.request.product.list.querystring, {}))
})

test('Valid extensive schema', t => {
	t.true(
		ajv.validate(schemas.request.product.list.querystring, {
			page: 0,
			count: 10,
			isDropDown: true,
			status: 'APPROVED',
			isMarkedForRemoval: false,
			isArchived: false,
			isActive: true,
			sort: 'status:ASC'
		})
	)
})

test('Valid data types', t => {
	t.false(
		ajv.validate(schemas.request.product.list.querystring, {
			isDropDown: 'string'
		})
	)

	t.false(
		ajv.validate(schemas.request.product.list.querystring, {
			status: 'NO VALID STATUS'
		})
	)

	t.false(
		ajv.validate(schemas.request.product.list.querystring, {
			isActive: 'TRUE'
		})
	)

	t.false(
		ajv.validate(schemas.request.product.list.querystring, {
			sort: 'notexistingcolumn:DESC'
		})
	)
})
