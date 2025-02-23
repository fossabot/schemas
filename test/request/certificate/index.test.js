const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Accepts certificate creation with all attributes', t => {
	t.true(
		ajv.validate(schemas.request.certificate.create.body, {
			title: 'Fantastic certificate 😅',
			description: 'Description about certificate',
			externalLink: 'https://othersource.com',
			logoFileId: 'FLE-ID',
			pictures: [
				{
					id: 'FLE-ID'
				}
			]
		})
	)

	t.true(
		ajv.validate(schemas.request.certificate.create.body, {
			title: 't',
			description: 'd'
		})
	)
})

test('Does not require pictures to create certificate', t => {
	t.true(
		ajv.validate(schemas.request.certificate.create.body, {
			title: 'Fantastic certificate 😅',
			description: 'Description about certificate',
			externalLink: null
		})
	)
})

test('Requires description for certificate', t => {
	t.false(
		ajv.validate(schemas.request.certificate.create.body, {
			title: 'Fantastic certificate 😅',
			externalLink: null,
			pictures: [
				{
					id: 'PROD-picture'
				}
			]
		})
	)
})

test('Requires title for certificate', t => {
	t.false(
		ajv.validate(schemas.request.certificate.create.body, {
			description: 'Description about certificate',
			externalLink: null,
			category: 'LEATHER',
			pictures: [
				{
					id: 'PROD-picture'
				}
			]
		})
	)
})

test('Can update only title', t => {
	t.true(
		ajv.validate(schemas.request.certificate.update.body, {
			title: 'New title'
		})
	)
})

test('Can update only description', t => {
	t.true(
		ajv.validate(schemas.request.certificate.update.body, {
			description: 'New description'
		})
	)
})

test('Can update only pictures', t => {
	t.true(
		ajv.validate(schemas.request.certificate.update.body, {
			pictures: [
				{
					id: 'FLE-NEW-ID'
				}
			]
		})
	)
})

test('Update logo', t => {
	t.true(
		ajv.validate(schemas.request.certificate.update.body, {
			logoFileId: 'id'
		})
	)
})

test('Cannot set description to null in update', t => {
	t.false(
		ajv.validate(schemas.request.certificate.update.body, {
			description: null
		})
	)
})

test('Cannot set title to null in update', t => {
	t.false(
		ajv.validate(schemas.request.certificate.update.body, {
			title: null
		})
	)
})

test('Valid request body', t => {
	t.true(
		ajv.validate(schemas.request.certificate.request.body, {
			statusComment: 'Please request quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.certificate.request.body, {}))

	t.true(ajv.validate(schemas.request.certificate.request.body, null))
})

test('Valid approve body', t => {
	t.true(
		ajv.validate(schemas.request.certificate.approve.body, {
			statusComment: 'Please approve quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.certificate.approve.body, {}))

	t.true(ajv.validate(schemas.request.certificate.approve.body, null))
})

test('Valid reject body', t => {
	t.true(
		ajv.validate(schemas.request.certificate.reject.body, {
			statusComment: 'Please reject quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.certificate.reject.body, {}))

	t.true(ajv.validate(schemas.request.certificate.reject.body, null))
})

test('Valid acknowledge body', t => {
	t.true(
		ajv.validate(schemas.request.certificate.acknowledge.body, {
			statusComment: 'Please acknowledge quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.certificate.acknowledge.body, {}))

	t.true(ajv.validate(schemas.request.certificate.acknowledge.body, null))
})
