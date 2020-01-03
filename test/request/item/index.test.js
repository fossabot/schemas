const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Minimal schema', t => {
	// Item has two options to be valid minimally
	t.true(
		ajv.validate(schemas.request.item.create.body, {
			id: 'id'
		})
	)

	t.true(
		ajv.validate(schemas.request.item.create.body, {
			name: 'name',
			unit: 'SQUARE_ROD'
		})
	)
})

test('Extensive schema', t => {
	t.true(
		ajv.validate(schemas.request.item.create.body, {
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

	// Missing unit
	t.false(
		ajv.validate(schemas.request.item.create.body, {
			name: 'name'
		})
	)

	// Missing name
	t.false(
		ajv.validate(schemas.request.item.create.body, {
			unit: 'SQUARE_ROD'
		})
	)
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
