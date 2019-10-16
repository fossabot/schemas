const assert = require('assert')
const AJV = require('ajv')
const {SettingSchema} = require('../setting')

const ajv = new AJV({allErrors: true})

exports.testSettingSchema = () => {
	const isValid = ajv.validate(SettingSchema, {
		page: 1,
		pageSize: 10
	})

	assert.strictEqual(isValid, true)
}

exports.testInvalidSettingSchema = () => {
	const isValid = ajv.validate(SettingSchema, {
		page: 1,
		pageSize: 200 // Max 100
	})

	assert.strictEqual(isValid, false)
}
