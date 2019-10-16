const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testUploadUrlSchema = () => {
	const isValid = ajv.validate(schemas.upload.url, {
		filename: 'test.jpg'
	})
	assert.strictEqual(isValid, true)
}

exports.testInvalidUploadUrlSchema = () => {
	const isValid = ajv.validate(schemas.upload.url, {
		filename: 'test.doc'
	})
	assert.strictEqual(isValid, false)
}
