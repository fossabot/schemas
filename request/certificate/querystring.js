const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.list = {
	type: 'object',
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		status: {
			oneOf: [
				{type: 'string', enum: constants.APPROVALSTATUS},
				{type: 'array', items: {type: 'string', enum: constants.APPROVALSTATUS}}
			]
		}
	}
}
