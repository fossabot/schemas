const constants = require('./constants')

module.exports.paginationParams = {
	page: {
		type: 'number',
		minimum: 0,
		default: constants.PAGINATION.defaultPage
	},
	count: {
		type: 'number',
		maximum: constants.PAGINATION.maxCount,
		minimum: 2,
		default: constants.PAGINATION.defaultCount
	}
}

module.exports.i18n = translations => ({
	type: 'array',
	items: {
		type: 'object',
		required: ['language'].concat(Object.keys(translations)),
		additionalProperties: false,
		properties: {
			language: {type: 'string', enum: constants.LANGUAGES},
			...translations
		}
	}
})

// Expects: ['status','updatedAt]
// Returns regex for column sorting
// Example regex accepts: status:DESC,updatedAt:ASC
module.exports.queryParamSortingPattern = columnList =>
	`^((${columnList.join('|')}):(${constants.SORTORDER.join('|')}))(,(${columnList.join(
		'|'
	)}):(${constants.SORTORDER.join('|')}))*$`

// Expects: ['status','updatedAt]
// Returns regex for array of elements
// Example regex accepts: status:DESC,updatedAt:ASC
module.exports.queryParamArrayPattern = arrayAcceptedValues =>
	`^(${arrayAcceptedValues.join('|')})(,(${arrayAcceptedValues.join('|')}))*$`

const geoJSONFeature = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		type: {type: 'string', enum: constants.GEOJSON_TYPE},
		geometry: {
			type: 'object',
			required: ['type', 'coordinates'],
			additionalProperties: false,
			properties: {
				type: {type: 'string', const: constants.GEOJSON_GEOMETRY_TYPE_ENUM.Point},
				coordinates: {type: 'array'}
			}
		}
	}
}

const geoJSONFeatureCollection = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		type: {type: 'string', const: constants.GEOJSON_TYPE_ENUM.FeatureCollection},
		features: {
			type: 'array',
			items: geoJSONFeature
		}
	}
}

// After: https://tools.ietf.org/html/rfc7946#section-1.4
module.exports.geoJSON = {
	oneOf: [geoJSONFeatureCollection, geoJSONFeature, {type: 'null'}]
}

module.exports.paginatedResponse = ref => ({
	type: 'object',
	properties: {
		data: {
			type: 'array',
			items: {$ref: ref}
		},
		meta: {
			type: 'object',
			required: ['count', 'page', 'totalCount'],
			properties: {
				count: {type: 'number'},
				page: {type: 'number'},
				totalCount: {type: 'number'}
			}
		}
	}
})
