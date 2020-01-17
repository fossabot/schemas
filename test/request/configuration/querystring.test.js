const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Get valid parameters', t => {
	t.true(ajv.validate(schemas.request.configuration.get.querystring, {}))

	t.true(
		ajv.validate(schemas.request.configuration.get.querystring, {
			translations: true
		})
	)

	t.true(
		ajv.validate(schemas.request.configuration.get.querystring, {
			translations: false
		})
	)
})

test('Get invalid parameters', t => {
	t.false(
		ajv.validate(schemas.request.configuration.get.querystring, {
			translations: null
		})
	)
})
