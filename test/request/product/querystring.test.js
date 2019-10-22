const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('List valid schema', t => {
	t.true(
		ajv.validate(schemas.request.product.list.querystring, {
			dropdownlist: true
		})
	)
})

test('Dropdownlist must be booleans', t => {
	t.false(
		ajv.validate(schemas.request.product.list.querystring, {
			dropdownlist: 'string'
		})
	)
})
