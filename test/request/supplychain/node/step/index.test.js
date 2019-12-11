const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid schema', t => {
	t.true(
		ajv.validate(schemas.request.supplychain.node.step.single, {
			pictures: [
				{
					id: 'FILE-ID'
				}
			],
			shortDescription: 'short',
			longDescription: 'long',
			employees: [
				{
					id: 'employee-id'
				}
			]
		})
	)
})
