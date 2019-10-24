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
			pictures: [
				{
					id: 'FLE-ID'
				}
			]
		})
	)
})

test('Requires pictures to create certificate', t => {
	t.false(
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
			categories: ['VEGAN'],
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
