const picture = require('../../../picture')
const employee = require('./employee')

module.exports.single = {
	type: 'object',
	required: ['pictures', 'shortDescription', 'longDescription', 'employees'],
	additionalProperties: false,
	properties: {
		pictures: picture.list,
		shortDescription: {type: 'string', minLength: 1},
		longDescription: {type: 'string', minLength: 1},
		employees: {
			type: 'array',
			items: employee.single
		}
	}
}
module.exports.employee = employee
