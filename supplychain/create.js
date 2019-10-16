const {PictureListSchema} = require('../picture')
const constants = require('../constants')
const generator = require('../generator')
const {SupplyChainStepSchema} = require('./step')

const SupplyChainNodeSchema = {
	type: 'object',
	required: ['id', 'companyId', 'pictures', 'i18n', 'steps'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1},
		companyId: {type: 'string', minLength: 1},
		pictures: PictureListSchema,
		i18n: generator.i18n({
			description: {type: 'string', minLength: 1},
			title: {type: 'string', minLength: 1}
		}),
		steps: {
			type: 'array',
			items: SupplyChainStepSchema
		}
	}
}

const SupplyChainLinkSchema = {
	type: 'object',
	required: ['quantity', 'unit', 'buyerNodeId', 'sellerNodeId', 'i18n'],
	additionalProperties: false,
	properties: {
		quantity: {type: 'number', exclusiveMinimum: 0},
		unit: {enum: constants.UNITS},
		buyerNodeId: {type: 'string', minLength: 1},
		sellerNodeId: {type: 'string', minLength: 1},
		i18n: generator.i18n({
			asset: {type: 'string', minLength: 1}
		})
	}
}

const SupplyChainCreateSchema = {
	type: 'object',
	required: ['name', 'entrySupplyNodeId', 'nodes', 'links'],
	additionalProperties: false,
	properties: {
		name: {type: 'string', minLength: 1},
		entrySupplyNodeId: {type: 'string', minLength: 1},
		nodes: {
			type: 'array',
			items: SupplyChainNodeSchema
		},
		links: {
			type: 'array',
			items: SupplyChainLinkSchema
		}
	}
}

module.exports = {
	SupplyChainCreateSchema
}
