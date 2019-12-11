const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid user create schema', t => {
	t.true(
		ajv.validate(schemas.request.user.create.body, {
			companyId: 'COM-Cano',
			firstName: 'Test',
			lastName: 'User',
			role: 'EMPLOYEE',
			description: 'Description',
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('User create missing important fields', t => {
	t.false(
		ajv.validate(schemas.request.user.create.body, {
			firstName: 'Test',
			lastName: 'User'
		})
	)
})

test('Valid user update body schema', t => {
	t.true(
		ajv.validate(schemas.request.user.update.body, {
			role: 'EMPLOYEE'
		})
	)
})

test('User update cannot be USER role', t => {
	t.false(
		ajv.validate(schemas.request.user.update.body, {
			role: 'USER'
		})
	)
})
