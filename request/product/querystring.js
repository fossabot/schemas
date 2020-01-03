const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.get = {
	type: 'object',
	properties: {
		supplychain: {type: 'boolean', default: false},
		attributes: {type: 'boolean', default: false},
		variations: {type: 'boolean', default: false},
		orders: {type: 'boolean', default: false}
	}
}

module.exports.SORT_COLUMNS_ENUM = {
	status: 'status',
	name: 'name',
	version: 'version',
	updatedAt: 'updatedAt'
}

module.exports.SORT_COLUMNS = Object.keys(exports.SORT_COLUMNS_ENUM)

module.exports.list = {
	type: 'object',
	additionalProperties: false,
	properties: {
		...generator.paginationParams,
		status: {
			type: 'string',
			pattern: generator.queryParamArrayPattern(constants.APPROVALSTATUS)
		},
		isMarkedForRemoval: {type: 'boolean', default: false},
		isArchived: {type: 'boolean', default: false},
		isActive: {type: 'boolean'},
		isDropDown: {type: 'boolean'},
		sort: {
			type: 'string',
			pattern: generator.queryParamSortingPattern(exports.SORT_COLUMNS)
		}
	}
}
