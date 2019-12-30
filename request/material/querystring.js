const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.SORT_COLUMNS_ENUM = {
	status: 'status',
	category: 'category',
	version: 'version',
	title: 'title',
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
		category: {type: 'string', enum: constants.MATERIAL_CATEGORIES},
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
