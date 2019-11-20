const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Create material valid schema', t => {
	t.true(
		ajv.validate(schemas.request.material.create.body, {
			title: 'Super sticky leather 😅',
			description: '# Super sticky leather (c)',
			externalLink: null,
			categories: ['VEGAN'],
			pictures: [
				{
					id: 'PROD-picture'
				}
			],
			statusComment: 'Need this material'
		})
	)
})

test('Requires pictures to create material', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			title: 'Super sticky leather 😅',
			description: '# Super sticky leather (c)',
			externalLink: null,
			categories: ['VEGAN']
		})
	)
})

test('Requires categories to create material', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			title: 'Super sticky leather 😅',
			description: '# Super sticky leather (c)',
			externalLink: null,
			pictures: [
				{
					id: 'PROD-picture'
				}
			]
		})
	)
})

test('Requires description for material', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			title: 'Super sticky leather 😅',
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

test('Requires title for material', t => {
	t.false(
		ajv.validate(schemas.request.product.create.body, {
			description: '# Super sticky leather (c)',
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
		ajv.validate(schemas.request.material.update.body, {
			title: 'New title'
		})
	)
})

test('Can update only description', t => {
	t.true(
		ajv.validate(schemas.request.material.update.body, {
			description: 'New description'
		})
	)
})

test('Can update only categories', t => {
	t.true(
		ajv.validate(schemas.request.material.update.body, {
			categories: ['VEGAN']
		})
	)
})

test('Can update only pictures', t => {
	t.true(
		ajv.validate(schemas.request.material.update.body, {
			pictures: [
				{
					id: 'PROD-picture'
				}
			]
		})
	)
})

test('Cannot set description to null in update', t => {
	t.false(
		ajv.validate(schemas.request.material.update.body, {
			description: null
		})
	)
})

test('Can set status comment to null in update', t => {
	t.true(
		ajv.validate(schemas.request.material.update.body, {
			statusComment: null
		})
	)
})

test('Cannot set title to null in update', t => {
	t.false(
		ajv.validate(schemas.request.material.update.body, {
			title: null
		})
	)
})

test('Valid request body', t => {
	t.true(
		ajv.validate(schemas.request.material.request.body, {
			statusComment: 'Please request quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.material.request.body, {}))

	t.true(ajv.validate(schemas.request.material.request.body, null))
})

test('Valid approve body', t => {
	t.true(
		ajv.validate(schemas.request.material.approve.body, {
			statusComment: 'Please approve quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.material.approve.body, {}))

	t.true(ajv.validate(schemas.request.material.approve.body, null))
})

test('Valid reject body', t => {
	t.true(
		ajv.validate(schemas.request.material.reject.body, {
			statusComment: 'Please reject quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.material.reject.body, {}))

	t.true(ajv.validate(schemas.request.material.reject.body, null))
})

test('Valid acknowledge body', t => {
	t.true(
		ajv.validate(schemas.request.material.acknowledge.body, {
			statusComment: 'Please acknowledge quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.material.acknowledge.body, {}))

	t.true(ajv.validate(schemas.request.material.acknowledge.body, null))
})

test('Valid remove body', t => {
	t.true(
		ajv.validate(schemas.request.material.remove.body, {
			statusComment: 'Please abandon quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.material.remove.body, {}))

	t.true(ajv.validate(schemas.request.material.remove.body, null))
})
