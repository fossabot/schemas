const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Analysis valid', t => {
	t.true(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'most-scanned'
		})
	)

	t.true(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'most-scanned',
			start: '2020-01-01',
			end: '2020-01-01'
		})
	)

	t.true(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'scans-per-day',
			end: '2020-01-01'
		})
	)

	t.true(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'locations',
			start: '2020-01-01'
		})
	)
})

test('Analysis invalid', t => {
	// No type
	t.false(ajv.validate(schemas.request.analytics.analysis.querystring, {}))

	t.false(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'invalid-type'
		})
	)

	// Wrong timestamp
	t.false(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'locations',
			start: '2020-01-01 16:40'
		})
	)

	// Wrong timestamp
	t.false(
		ajv.validate(schemas.request.analytics.analysis.querystring, {
			type: 'locations',
			end: '2020-01-01 16:40'
		})
	)
})
