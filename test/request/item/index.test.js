const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Minimal schema', t => {
	t.true(
		ajv.validate(schemas.request.item.create.body, {
			id: 'id'
		})
	)
})

test('Extensive schema', t => {
	t.true(
		ajv.validate(schemas.request.item.create.body, {
			id: 'id',
			name: 'name',
			unit: 'SQUARE_ROD',
			materialId: 'id',
			materialVersion: 1
		})
	)
})

test('Missing parameters', t => {
	// Requires an ID
	t.false(ajv.validate(schemas.request.item.create.body, {}))
})

test('Invalid parameters', t => {
	// ID must be string
	t.false(ajv.validate(schemas.request.item.create.body, {id: 42}))
})

test('List', t => {
	t.true(ajv.validate(schemas.request.item.list, {}))

	t.true(
		ajv.validate(schemas.request.item.list, {
			page: 1,
			count: 10,
			isDropDown: true
		})
	)

	// Invalid parameter drop down is parsed to false
	t.true(
		ajv.validate(schemas.request.item.list, {
			page: 1,
			count: 10,
			isDropDown: 42
		})
	)
})
