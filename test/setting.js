const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testPageSchema = () => {
	const isValid = ajv.validate(schemas.setting.page, 1)

	assert.strictEqual(isValid, true)
}

exports.testInvalidPageSchema = () => {
	const isValid = ajv.validate(schemas.setting.page, 'string')

	assert.strictEqual(isValid, false, 'page cannot be string')
}

exports.testPageSizeSchema = () => {
	const isValid = ajv.validate(schemas.setting.pageSize, 10)

	assert.strictEqual(isValid, true)
}

exports.testInvalidPageSizeSchema = () => {
	const isValid = ajv.validate(schemas.setting.pageSize, 200)

	assert.strictEqual(isValid, false, 'pageSize is greater than 100')
}
