const constants = require('../../lib/constants')
const generator = require('../../lib/generator')
const picture = require('../picture')
const querystring = require('./querystring')

module.exports.create = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: ['type', 'referenceBadge'],
				additionalProperties: false,
				properties: {
					claimantId: {type: 'string', minLength: 1},
					geojson: generator.geoJSON,
					explanation: {type: 'string', minLength: 1},
					referenceClaimId: {type: 'string', minLength: 1},
					referenceClaimVersion: {type: 'number', minimum: 1, multipleOf: 1},
					referenceBadge: {type: 'string', minLength: 1},
					referenceCertificateId: {type: 'string', minLength: 1},
					referenceCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
					otherCompanyId: {type: 'string', minLength: 1},
					statusComment: {type: 'string', minLength: 1},
					type: {type: 'string', const: constants.CLAIM_TYPE_ENUM.BADGE},
					files: picture.list
				}
			},
			{
				type: 'object',
				required: ['type', 'referenceCertificateId', 'referenceCertificateVersion'],
				additionalProperties: false,
				properties: {
					claimantId: {type: 'string', minLength: 1},
					geojson: generator.geoJSON,
					explanation: {type: 'string', minLength: 1},
					referenceClaimId: {type: 'string', minLength: 1},
					referenceClaimVersion: {type: 'number', minimum: 1, multipleOf: 1},
					referenceBadge: {type: 'string', minLength: 1},
					referenceCertificateId: {type: 'string', minLength: 1},
					referenceCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
					otherCompanyId: {type: 'string', minLength: 1},
					statusComment: {type: 'string', minLength: 1},
					type: {type: 'string', const: constants.CLAIM_TYPE_ENUM.CERTIFICATE},
					files: picture.list
				}
			}
		]
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
			referenceBadge: {type: 'string', minLength: 1},
			referenceCertificateId: {type: 'string', minLength: 1},
			referenceCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
			otherCompanyId: {type: 'string', minLength: 1},
			statusComment: {type: 'string', minLength: 1},
			status: {type: 'string', enum: constants.APPROVALSTATUS},
			files: picture.list
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
