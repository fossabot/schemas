const assert = require('assert')
const AJV = require('ajv')
const schemas = require('../..')

const ajv = new AJV({allErrors: true})

exports.testCompanyCreateSchema = () => {
	const isValid = ajv.validate(schemas.request.company.create.body, {
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
	const isValid = ajv.validate(schemas.request.company.create.body, {
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
	const isValid = ajv.validate(schemas.request.company.create.body, {
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
	const isValid = ajv.validate(schemas.request.company.update.body, {
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

exports.testQuerystringFind = () => {
	const isValid = ajv.validate(schemas.request.company.find.querystring, {
		country: 'VI',
		taxNo: 'taxNo'
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringFindInvalid = () => {
	const isValid = ajv.validate(schemas.request.company.find.querystring, {
		country: 'AP',
		taxNo: 'taxNo'
	})

	assert.strictEqual(isValid, false, 'country code is not valid')
}

exports.testQuerystringFindWithoutTax = () => {
	const isValid = ajv.validate(schemas.request.company.find.querystring, {
		country: 'VI'
	})

	assert.strictEqual(isValid, false, 'tax code is not provided')
}

exports.testQuerystringList = () => {
	const isValid = ajv.validate(schemas.request.company.list.querystring, {
		page: 1,
		count: 10,
		dropdownlist: true
	})

	assert.strictEqual(isValid, true)
}
