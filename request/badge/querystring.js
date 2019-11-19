const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.SORT_COLUMNS_ENUM = {
	status: 'status',
	version: 'version',
	title: 'title',
	category: 'category',
	description: 'description',
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
		isLatest: {type: 'boolean', default: true},
		isDropDown: {type: 'boolean', default: false},
		sort: {
			type: 'string',
			pattern: generator.queryParamSortingPattern(exports.SORT_COLUMNS)
		}
	}
}
