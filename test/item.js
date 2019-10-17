const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testItemCreateSchema = () => {
	const isValid = ajv.validate(schemas.item.create.body, {
		lineId: 'line-id',
		ids: ['id', 'id1']
	})

	assert.strictEqual(isValid, true)
}

exports.testItemCreateSchemaWithoutIds = () => {
	const isValid = ajv.validate(schemas.item.create.body, {
		lineId: 'line-id'
	})

	assert.strictEqual(isValid, false, 'ids is not provided')
}

exports.testItemCreateSchemaWithoutLineId = () => {
	const isValid = ajv.validate(schemas.item.create.body, {
		ids: ['id', 'id1']
	})

	assert.strictEqual(isValid, false, 'line-id is not provided')
}

exports.testQuerystringGet = () => {
	const isValid = ajv.validate(schemas.item.get.querystring, {
		existence: true
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringGetWithAdditionalProperties = () => {
	const isValid = ajv.validate(schemas.item.get.querystring, {
		existence: true,
		additional: 'ok'
	})

	assert.strictEqual(isValid, false, 'not allow additional properties')
}

exports.testQuerystringRandom = () => {
	const isValid = ajv.validate(schemas.item.random.querystring, {
		productId: 'product',
		sku: 'sku'
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringRandomInvalid = () => {
	const isValid = ajv.validate(schemas.item.random.querystring, {
		productId: 123,
		sku: 'sku'
	})

	assert.strictEqual(isValid, false, 'product id must be a string')
}
