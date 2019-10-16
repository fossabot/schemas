const assert = require('assert')
const AJV = require('ajv')
const {ItemCreateSchema} = require('../item/create')

const ajv = new AJV({allErrors: true})

exports.testItemCreateSchema = () => {
	const isValid = ajv.validate(ItemCreateSchema, {
		lineId: 'line-id',
		ids: ['id', 'id1']
	})

	assert.strictEqual(isValid, true)
}

exports.testItemCreateSchemaWithoutIds = () => {
	const isValid = ajv.validate(ItemCreateSchema, {
		lineId: 'line-id'
	})

	assert.strictEqual(isValid, false, 'ids is not provided')
}

exports.testItemCreateSchemaWithoutLineId = () => {
	const isValid = ajv.validate(ItemCreateSchema, {
		ids: ['id', 'id1']
	})

	assert.strictEqual(isValid, false, 'line-id is not provided')
}
