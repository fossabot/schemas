const assert = require('assert')
const AJV = require('ajv')
const {SupplyChainEmployeeSchema} = require('../supplychain/employee')
const {SupplyChainStepSchema} = require('../supplychain/step')
const {SupplyChainCreateSchema} = require('../supplychain/create')
const {SupplyChainUpdateSchema} = require('../supplychain/update')

const ajv = new AJV({allErrors: true})

exports.testSupplyChainEmployeeSchema = () => {
	const isValid = ajv.validate(SupplyChainEmployeeSchema, {
		id: 'id'
	})

	assert.strictEqual(isValid, true)
}

exports.testSupplyChainEmployeeSchemaWithoutId = () => {
	const isValid = ajv.validate(SupplyChainEmployeeSchema, {})

	assert.strictEqual(isValid, false)
}

exports.testSupplyChainStepSchema = () => {
	const isValid = ajv.validate(SupplyChainStepSchema, {
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
	const isValid = ajv.validate(SupplyChainStepSchema, {
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
	const isValid = ajv.validate(SupplyChainCreateSchema, {
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
	const isValid = ajv.validate(SupplyChainCreateSchema, {
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
	const isValid = ajv.validate(SupplyChainUpdateSchema, {
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
