const constants = require('../../lib/constants')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['id'],
		additionalProperties: false,
		properties: {
			// This ID can match an existing item, which will automatically take the existing item and ignore
			// other attributes in here
			id: {type: 'string', minLength: 1},
			name: {type: 'string', minLength: 1},
			unit: {anyOf: [{type: 'null'}, {enum: constants.UNITS}]},
			materialId: {type: 'string', minLength: 1},
			materialVersion: {type: 'number', minimum: 1, multipleOf: 1}
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
