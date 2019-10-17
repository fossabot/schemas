const querystring = require('./querystring')

const create = {
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

module.exports = {
	create,
	querystring
}
