const constants = require('../../lib/constants')
const querystring = require('./querystring')

module.exports.create = {
	body: {
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
}

module.exports.statusChange = {
	type: 'object',
	required: ['updatedAt'],
	additionalProperties: false,
	properties: {
		fileId: {type: ['string', 'null'], minLength: 1},
		updatedAt: {type: ['string', 'null'], format: 'date-time'}
	}
}

module.exports.accept = {
	body: exports.statusChange
}

module.exports.issue = {
	body: exports.statusChange
}

module.exports.receive = {
	body: exports.statusChange
}

module.exports.reject = {
	body: exports.statusChange
}

module.exports.ship = {
	body: exports.statusChange
}

module.exports.skip = {
	body: {
		type: 'object',
		required: ['updatedAt', 'reason'],
		additionalProperties: false,
		properties: {
			fileId: {type: ['string', 'null'], minLength: 1},
			reason: {type: 'string', enum: constants.ORDERLINESTATUS_SKIP_REASON},
			updatedAt: {type: ['string', 'null'], format: 'date-time'}
		}
	}
}

module.exports.get = {
	querystring: querystring.get
}

module.exports.list = {
	querystring: querystring.list
}
