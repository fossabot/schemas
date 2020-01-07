const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('List querystring', t => {
	t.true(ajv.validate(schemas.request.item.list.querystring, {}))

	t.true(
		ajv.validate(schemas.request.item.list.querystring, {
			page: 1,
			count: 10,
			isDropDown: true,
			isMarkedForRemoval: false
		})
	)
})
