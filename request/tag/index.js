const querystring = require('./querystring')

module.exports.get = {
	querystring: querystring.get
}

module.exports.list = {
	querystring: querystring.list
}

module.exports.random = {
	querystring: querystring.random
}

module.exports.create = {
	body: {
		type: 'object',
		required: ['lineId', 'ids'],
		additionalProperties: false,
		properties: {
			lineId: {type: 'string', minLength: 1},
			ids: {
				type: 'array',
				items: {type: 'string', minLength: 1}
			}
		}
	}
}
