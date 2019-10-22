const generator = require('../../../../lib/generator')
const picture = require('../../../picture')
const employee = require('./employee')

module.exports.single = {
	type: 'object',
	required: ['pictures', 'i18n', 'employees'],
	additionalProperties: false,
	properties: {
		pictures: picture.list,
		i18n: generator.i18n({
			shortDescription: {type: 'string', minLength: 1},
			longDescription: {type: 'string', minLength: 1}
		}),
		employees: {
			type: 'array',
			items: employee.single
		}
	}
}
module.exports.employee = employee
