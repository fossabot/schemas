const querystring = require('./querystring')

const get = {
	querystring: querystring.get
}

const random = {
	querystring: querystring.random
}

const create = {
	body: {
		type: 'object',
		required: ['lineId', 'ids'],
		additionalProperties: false,
		properties: {
			lineId: {
				type: 'string',
				minLength: 1
			},
			ids: {
				type: 'array',
				items: {
					type: 'string',
					minLength: 1
				}
			}
		}
	}
}

module.exports = {
	create,
	get,
	random
}
