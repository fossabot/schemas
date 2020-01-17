const querystring = require('./querystring')

const semanticVersionRegex = 'v(\\d+\\.)?(\\d+\\.)?(\\d+)'

module.exports.get = {
	querystring: querystring.get
}

module.exports.update = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			imgHost: {type: 'string', format: 'uri', minLength: 1},
			videoHost: {type: 'string', format: 'uri', minLength: 1},
			businessAppMinVersion: {type: 'string', format: 'regex', pattern: semanticVersionRegex},
			consumerAppMinVersion: {type: 'string', format: 'regex', pattern: semanticVersionRegex}
		}
	}
}
