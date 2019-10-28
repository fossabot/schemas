const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.SORT_COLUMNS_ENUM = {
	status: 'status',
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
		sort: {
			type: 'string',
			pattern: generator.queryParamSortingPattern(exports.SORT_COLUMNS)
		}
	}
}
