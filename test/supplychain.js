const assert = require('assert')
const AJV = require('ajv')
const schemas = require('..')

const ajv = new AJV({allErrors: true})

exports.testSupplyChainEmployeeSchema = () => {
	const isValid = ajv.validate(schemas.supplychain.node.step.employee.single, {
		id: 'id'
	})

	assert.strictEqual(isValid, true)
}

exports.testSupplyChainEmployeeSchemaWithoutId = () => {
	const isValid = ajv.validate(schemas.supplychain.node.step.employee.single, {})

	assert.strictEqual(isValid, false)
}

exports.testSupplyChainStepSchema = () => {
	const isValid = ajv.validate(schemas.supplychain.node.step.single, {
		pictures: [
			{
				id: 'FILE-ID'
			}
		],
		i18n: [
			{
				language: 'en',
				shortDescription: 'short',
				longDescription: 'long'
			}
		],
		employees: [
			{
				id: 'employee-id'
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testSupplyChainStepSchemaWithoutPictures = () => {
	const isValid = ajv.validate(schemas.supplychain.node.step.single, {
		i18n: [
			{
				language: 'en',
				shortDescription: 'short',
				longDescription: 'long'
			}
		],
		employees: [
			{
				id: 'employee-id'
			}
		]
	})

	assert.strictEqual(isValid, false, 'pictures are not provided')
}

exports.testSupplyChainCreateSchema = () => {
	const isValid = ajv.validate(schemas.supplychain.create.body, {
		name: 'name',
		entrySupplyNodeId: 'node-Cano',
		nodes: [
			{
				id: 'node-ID',
				companyId: 'COM-cano',
				pictures: [
					{
						id: 'FILE-ID'
					}
				],
				i18n: [
					{
						language: 'en',
						description: 'description',
						title: 'title'
					}
				],
				steps: []
			},
			{
				id: 'node-ID1',
				companyId: 'COM-calzado',
				pictures: [
					{
						id: 'FILE-ID'
					}
				],
				i18n: [
					{
						language: 'en',
						description: 'description',
						title: 'title'
					}
				],
				steps: []
			}
		],
		links: [
			{
				quantity: 1,
				unit: 'PRODUCT',
				buyerNodeId: 'node-ID',
				sellerNodeId: 'node-ID1',
				i18n: [
					{
						language: 'en',
						asset: 'Leather'
					}
				]
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testInvalidSupplyChainCreateSchema = () => {
	const isValid = ajv.validate(schemas.supplychain.create.body, {
		name: 'name',
		entrySupplyNodeId: 'node-Cano',
		nodes: [
			{
				id: 'node-ID',
				companyId: 'COM-cano',
				pictures: [
					{
						id: 'FILE-ID'
					}
				],
				i18n: [
					{
						language: 'en',
						description: 'description',
						title: 'title'
					}
				],
				steps: []
			},
			{
				id: 'node-ID1',
				companyId: 'COM-calzado',
				pictures: [
					{
						id: 'FILE-ID'
					}
				],
				i18n: [
					{
						language: 'en',
						description: 'description',
						title: 'title'
					}
				],
				steps: []
			}
		],
		links: [
			{
				quantity: 1,
				buyerNodeId: 'node-ID',
				sellerNodeId: 'node-ID1',
				i18n: [
					{
						language: 'en',
						asset: 'Leather'
					}
				]
			}
		]
	})

	assert.strictEqual(isValid, false, 'supply link is invalid')
}

exports.testSupplyChainUpdateSchema = () => {
	const isValid = ajv.validate(schemas.supplychain.update.body, {
		name: 'name update',
		nodes: [
			{
				id: 'node-ID',
				companyId: 'COM-cano',
				pictures: [
					{
						id: 'FILE-ID'
					}
				],
				i18n: [
					{
						language: 'en',
						description: 'description',
						title: 'title'
					}
				],
				steps: []
			},
			{
				id: 'node-ID1',
				companyId: 'COM-calzado',
				pictures: [
					{
						id: 'FILE-ID'
					}
				],
				i18n: [
					{
						language: 'en',
						description: 'description',
						title: 'title'
					}
				],
				steps: []
			}
		],
		links: [
			{
				id: 'link-id',
				i18n: [
					{
						language: 'en',
						asset: 'Leather update'
					}
				]
			}
		]
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringList = () => {
	const isValid = ajv.validate(schemas.supplychain.list.querystring, {
		dropdownlist: true
	})

	assert.strictEqual(isValid, true)
}

exports.testQuerystringListInvalidDropdown = () => {
	const isValid = ajv.validate(schemas.supplychain.list.querystring, {
		dropdownlist: 'string'
	})

	assert.strictEqual(isValid, false, 'dropdownlist value must be boolean type')
}
