const querystring = require('./querystring')

const create = {
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

const statusChange = {
	type: 'object',
	required: ['updatedAt'],
	additionalProperties: false,
	properties: {
		fileId: {type: ['string', 'null'], minLength: 1},
		updatedAt: {type: ['string', 'null'], format: 'date-time'}
	}
}

const accept = {
	body: statusChange
}

const issue = {
	body: statusChange
}

const receive = {
	body: statusChange
}

const reject = {
	body: statusChange
}

const ship = {
	body: statusChange
}

const skip = {
	body: statusChange
}

const get = {
	querystring: querystring.get
}

const list = {
	querystring: querystring.list
}

module.exports = {
	create,
	accept,
	issue,
	receive,
	skip,
	ship,
	reject,
	get,
	list
}
