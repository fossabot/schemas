const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Company create schema', t => {
	t.true(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'egg',
			country: 'VI',
			longitude: 1,
			latitude: 1,
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: null,
			country: 'VI',
			longitude: 1,
			latitude: 1,
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('Company create schema without country information is invalid', t => {
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'egg',
			longitude: 1,
			latitude: 1,
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('Schema with invalid country code is rejected', t => {
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'egg',
			country: 'AP',
			longitude: 1,
			latitude: 1,
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('Valid update schema is accepted', t => {
	t.true(
		ajv.validate(schemas.request.company.update.body, {
			longitude: 1,
			latitude: 1,
			description: 'egg',
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	t.false(
		ajv.validate(schemas.request.company.update.body, {
			description: null
		})
	)
})
