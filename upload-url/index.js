const constants = require('../lib/constants')
const querystring = require('./querystring')

const create = {
	querystring: querystring.create,
	body: {
		type: 'object',
		required: ['filename'],
		additionalProperties: false,
		properties: {
			filename: {
				type: 'string',
				pattern: `.(${constants.FILE_EXTENSIONS.join('|')})$`
			},
			longitude: {
				type: 'number'
			},
			latitude: {
				type: 'number'
			}
		}
	}
}
module.exports = {
	create
}
