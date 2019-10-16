const assert = require('assert')
const AJV = require('ajv')
const {OrderCreateSchema} = require('../order/create')
const {OrderStatusUpdateSchema} = require('../order/status')

const ajv = new AJV({allErrors: true})

exports.testOrderCreateSchema = () => {
	const isValid = ajv.validate(OrderCreateSchema, {
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
	const isValid = ajv.validate(OrderCreateSchema, {
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
	const isValid = ajv.validate(OrderCreateSchema, {})

	assert.strictEqual(isValid, false, 'no variations provided')
}

exports.testOrderStatusUpdateSchema = () => {
	const isValid = ajv.validate(OrderStatusUpdateSchema, {
		fileId: 'FILE-ID',
		updatedAt: '2019-10-13T20:20:39+00:00'
	})

	assert.strictEqual(isValid, true)
}

exports.testOrderStatusUpdateSchemaWithNoUpdatedAt = () => {
	const isValid = ajv.validate(OrderStatusUpdateSchema, {
		fileId: 'FILE-ID'
	})

	assert.strictEqual(isValid, false, 'updatedAt is not provided')
}

exports.testOrderStatusUpdateSchemaWithInCorrectUpdatedAt = () => {
	const isValid = ajv.validate(OrderStatusUpdateSchema, {
		fileId: 'FILE-ID',
		updatedAt: 'this-is-time'
	})

	assert.strictEqual(isValid, false, 'updatedAt is in wrong date-time format')
}
