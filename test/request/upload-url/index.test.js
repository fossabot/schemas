const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid create URL body', t => {
	t.true(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.jpg'
		})
	)
})

test('File ending must obey the valid ones', t => {
	t.false(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.doc'
		})
	)
})
