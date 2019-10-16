const {PictureListSchema} = require('../picture')
const generator = require('../generator')
const {SupplyChainEmployeeSchema} = require('./employee')

const SupplyChainStepSchema = {
	type: 'object',
	required: ['pictures', 'i18n', 'employees'],
	additionalProperties: false,
	properties: {
		pictures: PictureListSchema,
		i18n: generator.i18n({
			shortDescription: {type: 'string', minLength: 1},
			longDescription: {type: 'string', minLength: 1}
		}),
		employees: {
			type: 'array',
			items: SupplyChainEmployeeSchema
		}
	}
}

module.exports = {
	SupplyChainStepSchema
}
