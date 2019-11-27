const constants = require('../../lib/constants')
const generator = require('../../lib/generator')
const defaults = require('../defaults')
const picture = require('../picture')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		type: 'object',
		required: ['type'],
		additionalProperties: false,
		properties: {
			claimantId: {type: 'string', minLength: 1},
			geojson: generator.geoJSON,
			explanation: {type: 'string', minLength: 1},
			referenceClaimId: {type: 'string', minLength: 1},
			referenceClaimVersion: {type: 'number', minimum: 1, multipleOf: 1},
			claimingBadgeId: {type: 'string', minLength: 1},
			claimingBadgeVersion: {type: 'number', minimum: 1, multipleOf: 1},
			claimingCertificateId: {type: 'string', minLength: 1},
			claimingCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
			otherCompanyId: {type: 'string', minLength: 1},
			type: {type: 'string', enum: constants.CLAIM_TYPE},
			files: picture.list
		}
	}
}

module.exports.update = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			geojson: generator.geoJSON,
			explanation: {type: 'string', minLength: 1},
			referenceClaimId: {type: 'string', minLength: 1},
			referenceClaimVersion: {type: 'number', minimum: 1, multipleOf: 1},
			claimingBadgeVersion: {type: 'number', minimum: 1, multipleOf: 1},
			claimingCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
			files: picture.list
		}
	}
}

module.exports.request = defaults.request
module.exports.approve = defaults.approve
module.exports.reject = defaults.reject
module.exports.acknowledge = defaults.acknowledge

module.exports.list = {
	querystring: querystring.list,
	SORT_COLUMNS_ENUM: querystring.SORT_COLUMNS_ENUM
}
