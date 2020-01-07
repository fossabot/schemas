const constants = require('../../lib/constants')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		oneOf: [{required: ['id']}, {required: ['name', 'unit']}],
		additionalProperties: false,
		properties: {
			id: {type: 'string', minLength: 1},
			name: {type: 'string', minLength: 1},
			unit: {enum: constants.UNITS},
			materialId: {type: 'string', minLength: 1},
			materialVersion: {type: 'number', minimum: 1, multipleOf: 1}
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			name: {type: 'string', minLength: 1},
			unit: {enum: constants.UNITS},
			materialId: {type: 'string', minLength: 1},
			materialVersion: {type: 'number', minimum: 1, multipleOf: 1}
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
