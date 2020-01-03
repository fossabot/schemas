const constants = require('../../lib/constants')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		anyOf: [
			{
				type: 'object',
				required: ['id'],
				additionalProperties: false,
				properties: {
					id: {type: 'string', minLength: 1}
				}
			},
			{
				type: 'object',
				required: ['name', 'unit'],
				additionalProperties: false,
				properties: {
					name: {type: 'string', minLength: 1},
					unit: {anyOf: [{type: 'null'}, {enum: constants.UNITS}]},
					materialId: {type: 'string', minLength: 1},
					materialVersion: {type: 'number', minimum: 1, multipleOf: 1}
				}
			}
		]
	}
}

module.exports.list = {
	querystring: querystring.list
}
