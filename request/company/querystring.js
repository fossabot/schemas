const constants = require('../../lib/constants')
const generator = require('../../lib/generator')

module.exports.delete = {
	type: 'object',
	properties: {
		deleteUsers: {type: 'boolean', default: false}
	}
}

module.exports.find = {
	type: 'object',
	required: ['country', 'taxNo'],
	properties: {
		country: {enum: constants.COUNTRIES},
		taxNo: {type: 'string'}
	}
}

module.exports.get = {
	type: 'object',
	properties: {
		statistics: {type: 'boolean', default: false}
	}
}

module.exports.list = {
	...generator.paginationParams,
	dropdownlist: {type: 'boolean', default: false}
}
