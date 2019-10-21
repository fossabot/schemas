const constants = require('../../lib/constants')
const generator = require('../../lib/generator')

const deletion = {
	type: 'object',
	properties: {
		deleteUsers: {type: 'boolean', default: false}
	}
}

const find = {
	type: 'object',
	required: ['country', 'taxNo'],
	properties: {
		country: {enum: constants.COUNTRIES},
		taxNo: {type: 'string'}
	}
}

const get = {
	type: 'object',
	properties: {
		statistics: {type: 'boolean', default: false}
	}
}

const list = {
	...generator.paginationParams,
	dropdownlist: {type: 'boolean', default: false}
}

module.exports = {
	deletion,
	find,
	get,
	list
}
