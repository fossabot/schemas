const assert = require('assert')
const AJV = require('ajv')
const {UserCreateSchema, UserUpdateSchema} = require('../user')

const ajv = new AJV({allErrors: true})

exports.userCreateSchema = () => {
	const isValid = ajv.validate(UserCreateSchema, {
		companyId: 'COM-Cano',
		firstName: 'Test',
		lastName: 'User',
		role: 'EMPLOYEE',
		i18n: [
			{
				language: 'en',
				description: 'Description'
			}
		],
		pictures: [
			{
				id: 'FILE-ID'
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testInvalidUserCreateSchema = () => {
	const isValid = ajv.validate(UserCreateSchema, {
		firstName: 'Test',
		lastName: 'User'
	})

	assert.strictEqual(isValid, false)
}

exports.testInvalidUserRole = () => {
	const isValid = ajv.validate(UserUpdateSchema, {
		role: 'USER'
	})

	assert.strictEqual(isValid, false)
}
