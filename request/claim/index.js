const constants = require('../../lib/constants')
const generator = require('../../lib/generator')
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
			claimingCertificateId: {type: 'string', minLength: 1},
			claimingCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
			otherCompanyId: {type: 'string', minLength: 1},
			statusComment: {type: 'string', minLength: 1},
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
			statusComment: {type: 'string', minLength: 1},
			files: picture.list
		}
	}
}

module.exports.request = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.approve = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.reject = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.acknowledge = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.abandon = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.list = {
	querystring: querystring.list
}
