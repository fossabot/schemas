const querystring = require('./querystring')

const create = {
	type: 'object',
	required: ['variations'],
	additionalProperties: false,
	properties: {
		variations: {
			type: 'array',
			minLength: 1,
			items: {
				type: 'object',
				required: ['id', 'quantity'],
				additionalProperties: false,
				properties: {
					id: {type: 'string', minLength: 1},
					quantity: {type: 'number', exclusiveMinimum: 0, multipleOf: 1}
				}
			}
		}
	}
}

const status = {
	type: 'object',
	required: ['updatedAt'],
	additionalProperties: false,
	properties: {
		fileId: {type: ['string', 'null'], minLength: 1},
		updatedAt: {type: ['string', 'null'], format: 'date-time'}
	}
}

module.exports = {
	create,
	status,
	querystring
}
