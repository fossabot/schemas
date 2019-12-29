const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid picture schema', t => {
	t.true(
		ajv.validate(schemas.request.file.single, {
			id: 'pic-id'
		})
	)
})

test('Single picture requires an ID', t => {
	t.false(ajv.validate(schemas.request.file.single, {}))
})
