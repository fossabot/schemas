const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid schema', t => {
	t.true(
		ajv.validate(schemas.request.supplychain.node.step.employee.single, {
			id: 'id'
		})
	)
})

test('Employee requires ID', t => {
	t.false(ajv.validate(schemas.request.supplychain.node.step.employee.single, {}))
})
