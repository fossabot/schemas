const generator = require('../../lib/generator')
const constants = require('../../lib/constants')

module.exports.SORT_COLUMNS_ENUM = {
	status: 'status',
	version: 'version',
	type: 'type',
	claimantOfficialName: 'claimantOfficialName',
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
		isMarkedForRemoval: {type: ['boolean', 'null'], default: false},
		isArchived: {type: 'boolean', default: false},
		isActive: {type: 'boolean'},
		isDropDown: {type: 'boolean'},
		companyId: {type: 'string'},
		sort: {
			type: 'string',
			pattern: generator.queryParamSortingPattern(exports.SORT_COLUMNS)
		}
	}
}
