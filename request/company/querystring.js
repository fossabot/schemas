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

module.exports.SORT_COLUMNS_ENUM = {
	isArchived: 'isArchived',
	isMarkedForRemoval: 'isMarkedForRemoval',
	name: 'name',
	country: 'country',
	updatedAt: 'updatedAt'
}

module.exports.SORT_COLUMNS = Object.keys(exports.SORT_COLUMNS_ENUM)

module.exports.list = {
	type: 'object',
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		isMarkedForRemoval: {type: 'boolean', default: false},
		country: {type: 'string'},
		founded: {type: 'number', minimum: 1200, maxiumum: 2200, multipleOf: 1},
		companySize: {type: 'string', enum: constants.COMPANY_SIZE},
		companyType: {type: 'string', enum: constants.COMPANY_TYPE},
		isArchived: {type: 'boolean', default: false},
		isDropDown: {type: 'boolean'},
		sort: {
			type: 'string',
			pattern: generator.queryParamSortingPattern(exports.SORT_COLUMNS)
		}
	}
}
