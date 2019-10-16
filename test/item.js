const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testItemCreateSchema = () => {
	const isValid = ajv.validate(schemas.item.create, {
		lineId: 'line-id',
		ids: ['id', 'id1']
	})

	assert.strictEqual(isValid, true)
}

exports.testItemCreateSchemaWithoutIds = () => {
	const isValid = ajv.validate(schemas.item.create, {
		lineId: 'line-id'
	})

	assert.strictEqual(isValid, false, 'ids is not provided')
}

exports.testItemCreateSchemaWithoutLineId = () => {
	const isValid = ajv.validate(schemas.item.create, {
		ids: ['id', 'id1']
	})

	assert.strictEqual(isValid, false, 'line-id is not provided')
}
