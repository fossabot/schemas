const {PictureListSchema} = require('../picture')
const generator = require('../generator')
const {SupplyChainStepSchema} = require('./step')

const SupplyChainNodeSchema = {
	type: 'object',
	required: ['id'],
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
	required: ['id', 'i18n'],
	additionalProperties: false,
	properties: {
		id: {type: 'string'},
		i18n: generator.i18n({
			asset: {type: 'string', minLength: 1}
		})
	}
}

const SupplyChainUpdateSchema = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		name: {type: 'string', minLength: 1},
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
	SupplyChainUpdateSchema
}
