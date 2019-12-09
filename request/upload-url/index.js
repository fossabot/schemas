const constants = require('../../lib/constants')
const generator = require('../../lib/generator')
const querystring = require('./querystring')

module.exports.create = {
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
			geojson: generator.geoJSONFeaturePoint
		}
	}
}
