const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('List querystring is valid', t => {
	t.true(
		ajv.validate(schemas.request.certificate.list.querystring, {
			page: 1,
			count: 10,
			status: 'DRAFT,REQUESTED',
			sort: 'version:ASC',
			isMarkedForRemoval: false,
			isArchived: true,
			isActive: true,
			isDropDown: true
		})
	)

	t.true(ajv.validate(schemas.request.certificate.list.querystring, {}))
})

test('List can called without anything', t => {
	t.true(ajv.validate(schemas.request.certificate.list.querystring, {}))
})

test('Status can also be an array', t => {
	t.true(
		ajv.validate(schemas.request.certificate.list.querystring, {
			status: 'APPROVED,REQUESTED'
		})
	)
})

test('Sorting can also be an array', t => {
	t.true(
		ajv.validate(schemas.request.certificate.list.querystring, {
			sort: 'status:DESC,updatedAt:ASC'
		})
	)
})

test('Status must contain approval status', t => {
	t.false(
		ajv.validate(schemas.request.certificate.list.querystring, {
			status: 'S'
		})
	)
})

test('Sort columns must be valid columns', t => {
	t.false(
		ajv.validate(schemas.request.certificate.list.querystring, {
			sort: 'notAvailable:DESC'
		})
	)
})

test('Sort columns must be valid sort order', t => {
	t.false(
		ajv.validate(schemas.request.certificate.list.querystring, {
			sort: 'status:CRUX'
		})
	)
})
