const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Find querystring find valid schema check', t => {
	t.true(
		ajv.validate(schemas.request.company.find.querystring, {
			country: 'VI',
			taxNo: 'taxNo'
		})
	)
})

test('Find querystring find invalid country code is rejected', t => {
	t.false(
		ajv.validate(schemas.request.company.find.querystring, {
			country: 'AP',
			taxNo: 'taxNo'
		})
	)
})

test('Find querystring without tax number is rejected', t => {
	t.false(
		ajv.validate(schemas.request.company.find.querystring, {
			country: 'AP'
		})
	)
})

test('List querystring', t => {
	t.true(
		ajv.validate(schemas.request.company.list.querystring, {
			page: 1,
			count: 10,
			isDropDown: true
		})
	)

	t.true(
		ajv.validate(schemas.request.company.list.querystring, {
			page: 1,
			count: 10,
			isDropDown: true,
			isMarkedForRemoval: false,
			country: 'DE',
			founded: 2014,
			companySize: 'FROM_51_TO_200',
			companyType: 'PUBLIC_COMPANY',
			isArchived: false
		})
	)
})
