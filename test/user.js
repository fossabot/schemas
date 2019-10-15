const assert = require('assert')
const AJV = require('ajv')
const {UserCreationSchema} = require('../user')

const ajv = new AJV({allErrors: true})

exports.testInvalidUserCreation = () => {
	const isValid = ajv.validate(UserCreationSchema, {
		firstName: 'Test',
		lastName: 'User'
	})
	assert.strictEqual(isValid, false)
}
