const file = require('../../../file')
const employee = require('./employee')

module.exports.create = {
	type: 'object',
	required: ['pictures', 'shortDescription', 'longDescription', 'employees'],
	additionalProperties: false,
	properties: {
		pictures: file.list,
		shortDescription: {type: 'string', minLength: 1},
		longDescription: {type: 'string', minLength: 1},
		employees: {
			type: 'array',
			items: employee.create
		}
	}
}
module.exports.employee = employee
