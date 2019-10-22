const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid single variation schema', t => {
	t.true(
		ajv.validate(schemas.request.product.variation.single, {
			id: 'variation-id',
			sku: 'sku'
		})
	)
})

test('Variation requries an ID', t => {
	t.false(
		ajv.validate(schemas.request.product.variation.single, {
			sku: 'sku'
		})
	)
})
