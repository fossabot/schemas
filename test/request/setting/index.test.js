const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid page schema', t => {
	t.true(ajv.validate(schemas.request.setting.page, 1))
})

test('Page number must be a number', t => {
	t.false(ajv.validate(schemas.request.setting.page, 'string'))
})

test('Valid page size', t => {
	t.true(ajv.validate(schemas.request.setting.pageSize, 1))
})

test('Page size must be number', t => {
	t.false(ajv.validate(schemas.request.setting.pageSize, 'string'))
})

test('Page size cannot exceed 100', t => {
	t.false(ajv.validate(schemas.request.setting.pageSize, 200))
})
