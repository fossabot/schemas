const assert = require('assert')
const AJV = require('ajv')
const schemas = require('../..')

const ajv = new AJV({allErrors: true})

exports.testPictureSchema = () => {
	const isValid = ajv.validate(schemas.request.picture.single, {
		id: 'pic-id'
	})

	assert.strictEqual(isValid, true)
}

exports.testPictureSchemaWithoutId = () => {
	const isValid = ajv.validate(schemas.request.picture.single, {})

	assert.strictEqual(isValid, false, 'id is not provided')
}
