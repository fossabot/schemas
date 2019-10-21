const assert = require('assert')
const AJV = require('ajv')
const schemas = require('../..')

const ajv = new AJV({allErrors: true})

exports.testOrderCreateSchema = () => {
	const isValid = ajv.validate(schemas.request.order.create.body, {
		variations: [
			{
				id: 'id',
				quantity: 10
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testOrderCreateSchemaWithNonDigitQuantity = () => {
	const isValid = ajv.validate(schemas.request.order.create.body, {
		variations: [
			{
				id: 'id',
				quantity: '100a'
			}
		]
	})

	assert.strictEqual(isValid, false, 'quantity must be a number')
}

exports.testInvalidOrderCreateSchema = () => {
	const isValid = ajv.validate(schemas.request.order.create.body, {})

	assert.strictEqual(isValid, false, 'no variations provided')
}

exports.testOrderStatusUpdateSchema = () => {
	const isValid = ajv.validate(schemas.request.order.accept.body, {
		fileId: 'FILE-ID',
		updatedAt: '2019-10-13T20:20:39+00:00'
	})

	assert.strictEqual(isValid, true)
}

exports.testOrderStatusUpdateSchemaWithNoUpdatedAt = () => {
	const isValid = ajv.validate(schemas.request.order.accept.body, {
		fileId: 'FILE-ID'
	})

	assert.strictEqual(isValid, false, 'updatedAt is not provided')
}

exports.testOrderStatusUpdateSchemaWithInCorrectUpdatedAt = () => {
	const isValid = ajv.validate(schemas.request.order.accept.body, {
		fileId: 'FILE-ID',
		updatedAt: 'this-is-time'
	})

	assert.strictEqual(isValid, false, 'updatedAt is in wrong date-time format')
}

exports.testQuerystringGet = () => {
	const isValid = ajv.validate(schemas.request.order.get.querystring, {
		deep: true
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringList = () => {
	const isValid = ajv.validate(schemas.request.order.list.querystring, {
		status: 'history'
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringListInvalidStatus = () => {
	const isValid = ajv.validate(schemas.request.order.list.querystring, {
		status: 'history1'
	})

	assert.strictEqual(isValid, false, 'status in list is not valid')
}
