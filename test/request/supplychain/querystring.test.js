const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid querystring list schema', t => {
	t.true(
		ajv.validate(schemas.request.supplychain.list.querystring, {
			dropdownlist: true
		})
	)
})

test('Dropdown value must be boolean', t => {
	t.false(
		ajv.validate(schemas.request.supplychain.list.querystring, {
			dropdownlist: 'string'
		})
	)
})
