const assert = require('assert')
const AJV = require('ajv')
const {PictureSchema} = require('../picture')

const ajv = new AJV({allErrors: true})

exports.testPictureSchema = () => {
	const isValid = ajv.validate(PictureSchema, {
		id: 'pic-id'
	})

	assert.strictEqual(isValid, true)
}

exports.testPictureSchemaWithoutId = () => {
	const isValid = ajv.validate(PictureSchema, {})

	assert.strictEqual(isValid, false, 'id is not provided')
}
