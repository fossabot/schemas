const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Returns a valid full number of QR codes', t => {
	t.true(
		ajv.validate(schemas.request.qrCodes.get.querystring, {
			quantity: 10
		})
	)
})
