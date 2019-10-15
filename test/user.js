const assert = require('assert')
const AJV = require('ajv')
const {UserCreation} = require('../user')

const ajv = new AJV({allErrors: true})

exports.testInvalidUserCreation = () => {
	const isValid = ajv.validate(UserCreation, {
		firstName: 'Test',
		lastName: 'User'
	})
	assert.strictEqual(isValid, false)
}
