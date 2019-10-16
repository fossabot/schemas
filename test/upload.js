const assert = require('assert')
const AJV = require('ajv')
const {UploadUrlSchema} = require('../upload')

const ajv = new AJV({allErrors: true})

exports.testUploadUrlSchema = () => {
	const isValid = ajv.validate(UploadUrlSchema, {
		filename: 'test.jpg'
	})
	assert.strictEqual(isValid, true)
}

exports.testInvalidUploadUrlSchema = () => {
	const isValid = ajv.validate(UploadUrlSchema, {
		filename: 'test.doc'
	})
	assert.strictEqual(isValid, false)
}
