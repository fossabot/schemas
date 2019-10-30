const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Create badge schema', t => {
	t.true(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			category: 'ENVIRONMENTAL',
			description: 'Long lve the king',
			rule: 'NO_CHILD_LABOUR'
		})
	)
})

test('Creates badge wthout rule', t => {
	t.true(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			category: 'ENVIRONMENTAL',
			description: 'Long lve the king'
		})
	)
})

test('Must create with title, icon, category and description', t => {
	t.false(
		ajv.validate(schemas.request.badge.create.body, {
			icon: 'mdi-superb',
			category: 'ENVIRONMENTAL',
			description: 'Long lve the king'
		})
	)

	t.false(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			category: 'ENVIRONMENTAL',
			description: 'Long lve the king'
		})
	)

	t.false(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			description: 'Long lve the king'
		})
	)

	t.false(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			category: 'ENVIRONMENTAL'
		})
	)
})

test('Must have valid category', t => {
	t.false(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			category: 'NOT-VALID',
			description: 'Long lve the king'
		})
	)
})

test('Updates badge with valid data', t => {
	t.true(
		ajv.validate(schemas.request.badge.update.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			category: 'ENVIRONMENTAL',
			description: 'Long lve the king',
			rule: 'NO_CHILD_LABOUR'
		})
	)
})

test('Updates badge with no data', t => {
	t.true(ajv.validate(schemas.request.badge.update.body, {}))
})

test('Must update with valid category', t => {
	t.false(
		ajv.validate(schemas.request.badge.update.body, {
			category: 'NOT-VALID'
		})
	)
})
