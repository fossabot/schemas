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
			referenceBadge: {type: 'string', minLength: 1},
			referenceCertificateId: {type: 'string', minLength: 1},
			referenceCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
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
			referenceBadge: {type: 'string', minLength: 1},
			referenceCertificateId: {type: 'string', minLength: 1},
			referenceCertificateVersion: {type: 'number', minimum: 1, multipleOf: 1},
			statusComment: {type: 'string', minLength: 1},
			files: picture.list
		}
	}
}

module.exports.request = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			statusComment: {type: 'string', minLength: 1}
		}
	}
}

module.exports.approve = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			statusComment: {type: 'string', minLength: 1}
		}
	}
}

module.exports.reject = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			statusComment: {type: 'string', minLength: 1}
		}
	}
}

module.exports.acknowledge = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			statusComment: {type: 'string', minLength: 1}
		}
	}
}

module.exports.abandon = {
	body: {
		type: 'object',
		required: [],
		additionalProperties: false,
		properties: {
			statusComment: {type: 'string', minLength: 1}
		}
	}
}

module.exports.list = {
	querystring: querystring.list
}
