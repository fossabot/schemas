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
			rule: 'NO_CHILD_LABOUR',
			statusComment: 'Need this badge in the system'
		})
	)
})

test('Creates badge wthout rule', t => {
	t.true(
		ajv.validate(schemas.request.badge.create.body, {
			title: 'No Slavery',
			icon: 'mdi-superb',
			category: 'ENVIRONMENTAL',
			description: 'Long lve the king',
			rule: null
		})
	)

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

test('Can set status comment to null in update', t => {
	t.true(
		ajv.validate(schemas.request.badge.update.body, {
			statusComment: null
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

test('Valid request body', t => {
	t.true(
		ajv.validate(schemas.request.badge.request.body, {
			statusComment: 'Please request quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.badge.request.body, {}))

	t.true(ajv.validate(schemas.request.badge.request.body, null))
})

test('Valid approve body', t => {
	t.true(
		ajv.validate(schemas.request.badge.approve.body, {
			statusComment: 'Please approve quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.badge.approve.body, {}))

	t.true(ajv.validate(schemas.request.badge.approve.body, null))
})

test('Valid reject body', t => {
	t.true(
		ajv.validate(schemas.request.badge.reject.body, {
			statusComment: 'Please reject quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.badge.reject.body, {}))

	t.true(ajv.validate(schemas.request.badge.reject.body, null))
})

test('Valid acknowledge body', t => {
	t.true(
		ajv.validate(schemas.request.badge.acknowledge.body, {
			statusComment: 'Please acknowledge quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.badge.acknowledge.body, {}))

	t.true(ajv.validate(schemas.request.badge.acknowledge.body, null))
})

test('Valid remove body', t => {
	t.true(
		ajv.validate(schemas.request.badge.remove.body, {
			statusComment: 'Please abandon quickly!',
			final: true
		})
	)

	t.true(ajv.validate(schemas.request.badge.remove.body, {}))

	t.true(ajv.validate(schemas.request.badge.remove.body, null))
})
