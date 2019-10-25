const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Configuration update schema', t => {
	console.log(
		ajv.validate(schemas.request.configuration.update.body, {
			consumerAppMinVersion: 'v1.0.0',
			businessAppMinVersion: 'v1.0.0',
			imgHost: 'https://retraced-dev.imgix.net/'
		})
	)
	t.true(
		ajv.validate(schemas.request.configuration.update.body, {
			consumerAppMinVersion: 'v1.0.0',
			businessAppMinVersion: 'v1.0.0',
			imgHost: 'https://retraced-dev.imgix.net/'
		})
	)
})

test('Does not allow null value for consumer app min version', t => {
	t.false(
		ajv.validate(schemas.request.configuration.update.body, {
			consumerAppMinVersion: null
		})
	)
})

test('Consumer app min version must be in format v1.0.0', t => {
	t.false(
		ajv.validate(schemas.request.configuration.update.body, {
			consumerAppMinVersion: '1.0.0'
		})
	)
})

test('Does not allow null value for business app min version', t => {
	t.false(
		ajv.validate(schemas.request.configuration.update.body, {
			businessAppMinVersion: null
		})
	)
})

test('Business app min version must be in format v1.0.0', t => {
	t.false(
		ajv.validate(schemas.request.configuration.update.body, {
			businessAppMinVersion: '1.0.0'
		})
	)
})

test('Does not allow null value for img host', t => {
	t.false(
		ajv.validate(schemas.request.configuration.update.body, {
			imgHost: null
		})
	)
})

test('Requires img host to be URI', t => {
	t.false(
		ajv.validate(schemas.request.configuration.update.body, {
			imgHost: 'Hello world!'
		})
	)
})
