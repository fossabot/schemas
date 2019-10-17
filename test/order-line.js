const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testQuerystringOrderlines = () => {
	const isValid = ajv.validate(schemas.orderLine.list.querystring, {
		orderId: 'FILE-ID',
		status: 'to-seperate'
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringOrderlinesWithoutOrderId = () => {
	const isValid = ajv.validate(schemas.orderLine.list.querystring, {
		status: 'to-seperate'
	})

	assert.strictEqual(isValid, false, 'orderID must be provided')
}

exports.testQuerystringOrderlinesInvalidStatus = () => {
	const isValid = ajv.validate(schemas.orderLine.list.querystring, {
		orderId: 'FILE-ID',
		status: 'to-seperate1'
	})

	assert.strictEqual(isValid, false, 'status is not valid')
}
