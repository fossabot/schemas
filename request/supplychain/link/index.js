const constants = require('../../../lib/constants')
const generator = require('../../../lib/generator')

const single = {
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

const singleUpdate = {
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

module.exports = {
	single,
	singleUpdate
}
