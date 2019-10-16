const assert = require('assert')
const AJV = require('ajv')
const {CompanyCreateSchema} = require('../company/create')
const {CompanyUpdateSchema} = require('../company/update')

const ajv = new AJV({allErrors: true})

exports.testCompanyCreateSchema = () => {
	const isValid = ajv.validate(CompanyCreateSchema, {
		taxNo: 'tax',
		officialName: 'official name',
		country: 'VI',
		longitude: 1,
		latitude: 1,
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		pictures: [
			{
				id: 'FILE-ID'
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testCompanyCreateSchemaWithoutCountryInformation = () => {
	const isValid = ajv.validate(CompanyCreateSchema, {
		taxNo: 'tax',
		officialName: 'official name',
		longitude: 1,
		latitude: 1,
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		pictures: [
			{
				id: 'FILE-ID'
			}
		]
	})

	assert.strictEqual(isValid, false, 'no country is provided')
}

exports.testCompanyCreateSchemaWithIncorrectCountryCodeInformation = () => {
	const isValid = ajv.validate(CompanyCreateSchema, {
		taxNo: 'tax',
		officialName: 'official name',
		country: 'AP',
		longitude: 1,
		latitude: 1,
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		pictures: [
			{
				id: 'FILE-ID'
			}
		]
	})

	assert.strictEqual(isValid, false, 'country code is not valid')
}

exports.testCompanyUpdateSchema = () => {
	const isValid = ajv.validate(CompanyUpdateSchema, {
		longitude: 1,
		latitude: 1,
		i18n: [
			{
				language: 'en',
				description: 'egg'
			}
		],
		pictures: [
			{
				id: 'FILE-ID'
			}
		]
	})

	assert.strictEqual(isValid, true)
}
