const assert = require('assert')
const AJV = require('ajv')
const schemas = require('../..')

const ajv = new AJV({allErrors: true})

exports.userCreateSchema = () => {
	const isValid = ajv.validate(schemas.request.user.create.body, {
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
	const isValid = ajv.validate(schemas.request.user.create.body, {
		firstName: 'Test',
		lastName: 'User'
	})

	assert.strictEqual(isValid, false)
}

exports.testInvalidUserRole = () => {
	const isValid = ajv.validate(schemas.request.user.update.body, {
		role: 'USER'
	})

	assert.strictEqual(isValid, false)
}
