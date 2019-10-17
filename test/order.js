const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testOrderCreateSchema = () => {
	const isValid = ajv.validate(schemas.order.create, {
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
	const isValid = ajv.validate(schemas.order.create, {
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
	const isValid = ajv.validate(schemas.order.create, {})

	assert.strictEqual(isValid, false, 'no variations provided')
}

exports.testOrderStatusUpdateSchema = () => {
	const isValid = ajv.validate(schemas.order.status, {
		fileId: 'FILE-ID',
		updatedAt: '2019-10-13T20:20:39+00:00'
	})

	assert.strictEqual(isValid, true)
}

exports.testOrderStatusUpdateSchemaWithNoUpdatedAt = () => {
	const isValid = ajv.validate(schemas.order.status, {
		fileId: 'FILE-ID'
	})

	assert.strictEqual(isValid, false, 'updatedAt is not provided')
}

exports.testOrderStatusUpdateSchemaWithInCorrectUpdatedAt = () => {
	const isValid = ajv.validate(schemas.order.status, {
		fileId: 'FILE-ID',
		updatedAt: 'this-is-time'
	})

	assert.strictEqual(isValid, false, 'updatedAt is in wrong date-time format')
}

exports.testQuerystringOrderlines = () => {
	const isValid = ajv.validate(schemas.order.querystring.listOrderLines, {
		orderId: 'FILE-ID',
		status: 'to-seperate'
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringOrderlinesWithoutOrderId = () => {
	const isValid = ajv.validate(schemas.order.querystring.listOrderLines, {
		status: 'to-seperate'
	})

	assert.strictEqual(isValid, false, 'orderID must be provided')
}

exports.testQuerystringOrderlinesInvalidStatus = () => {
	const isValid = ajv.validate(schemas.order.querystring.listOrderLines, {
		orderId: 'FILE-ID',
		status: 'to-seperate1'
	})

	assert.strictEqual(isValid, false, 'status is not valid')
}

exports.testQuerystringGet = () => {
	const isValid = ajv.validate(schemas.order.querystring.get, {
		deep: true
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringList = () => {
	const isValid = ajv.validate(schemas.order.querystring.list, {
		status: 'history'
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringListInvalidStatus = () => {
	const isValid = ajv.validate(schemas.order.querystring.list, {
		status: 'history1'
	})

	assert.strictEqual(isValid, false, 'status in list is not valid')
}
