const i18ncountries = require('i18n-iso-countries')

module.exports.PAGINATION = {
	defaultPage: 0,
	defaultCount: 15,
	maxCount: 100
}
module.exports.LANGUAGES_ENUM = {
	en: 'en',
	es: 'es',
	de: 'de'
}
module.exports.LANGUAGES = Object.keys(exports.LANGUAGES_ENUM)

module.exports.USERROLES_ENUM = {
	ADMIN: 'ADMIN',
	COMPANY_OWNER: 'COMPANY_OWNER',
	EMPLOYEE: 'EMPLOYEE',
	CONSUMER: 'CONSUMER'
}
module.exports.USERROLES = Object.keys(exports.USERROLES_ENUM)

module.exports.FILE_EXTENSIONS_ENUM = {
	jpeg: 'jpeg',
	bmp: 'bmp',
	jpg: 'jpg',
	png: 'png',
	heic: 'heic',
	gif: 'gif',
	pdf: 'pdf',
	mov: 'mov',
	mp4: 'mp4',
	webm: 'webm'
}
module.exports.FILE_EXTENSIONS = Object.keys(exports.FILE_EXTENSIONS_ENUM)

module.exports.FILE_TYPES_ENUM = {
	DOCUMENT: 'DOCUMENT',
	IMAGE: 'IMAGE',
	VIDEO: 'VIDEO'
}
module.exports.FILE_TYPES = Object.keys(exports.FILE_TYPES_ENUM)

module.exports.UNITS_ENUM = {
	CENTILITRE: 'CENTILITRE',
	CENTIMETRE: 'CENTIMETRE',
	CUBIC_DECIMETRE: 'CUBIC_DECIMETRE',
	CUBIC_METRE: 'CUBIC_METRE',
	DECIMETRE: 'DECIMETRE',
	GRAM: 'GRAM',
	INCH: 'INCH',
	KILOGRAM: 'KILOGRAM',
	LITRE: 'LITRE',
	METRE: 'METRE',
	MILLIGRAM: 'MILLIGRAM',
	MILLILITRE: 'MILLILITRE',
	PIECES: 'PIECES',
	POUNDS: 'POUNDS',
	PRODUCT: 'PRODUCT',
	SQUARE_CENTIMETRE: 'SQUARE_CENTIMETRE',
	SQUARE_DECIMETRE: 'SQUARE_DECIMETRE',
	SQUARE_INCH: 'SQUARE_INCH',
	SQUARE_METRE: 'SQUARE_METRE',
	SQUARE_FEET: 'SQUARE_FEET',
	STONE: 'STONE',
	SHORT_TON: 'SHORT_TON',
	LONG_TON: 'LONG_TON',
	HUNDREDWEIGHT: 'HUNDREDWEIGHT',
	SHORT_HUNDREDWEIGHT: 'SHORT_HUNDREDWEIGHT',
	LONG_HUNDREDWEIGHT: 'LONG_HUNDREDWEIGHT',
	OUNCE: 'OUNCE',
	DRAM: 'DRAM',
	GRAIN: 'GRAIN',
	PENNYWEIGHT: 'PENNYWEIGHT',
	SCRUPLE: 'SCRUPLE',
	GALLON: 'GALLON',
	QUART: 'QUART',
	PINT: 'PINT',
	GILL: 'GILL',
	FLUID_OUNCE: 'FLUID_OUNCE',
	FLUID_DRAM: 'FLUID_DRAM',
	MINIM: 'MINIM',
	BUSHEL: 'BUSHEL',
	PECK: 'PECK',
	NAUTICAL_MILE: 'NAUTICAL_MILE',
	MILE: 'MILE',
	FURLONG: 'FURLONG',
	ROD: 'ROD',
	FATHOM: 'FATHOM',
	YARD: 'YARD',
	FOOT: 'FOOT',
	SQUARE_MILE: 'SQUARE_MILE',
	ACRE: 'ACRE',
	SQUARE_ROD: 'SQUARE_ROD',
	SQUARE_YARD: 'SQUARE_YARD',
	CUBIC_YARD: 'CUBIC_YARD',
	CUBIC_FOOT: 'CUBIC_FOOT',
	CUBIC_INCH: 'CUBIC_INCH',
	ACRE_FOOT: 'ACRE_FOOT',
	CORD: 'CORD'
}
module.exports.UNITS = Object.keys(exports.UNITS_ENUM)

module.exports.COUNTRIES = Object.keys(i18ncountries.getAlpha2Codes())

module.exports.USER_AUTHORIZATION_TYPES_ENUM = {
	'Username-Password-Authentication': 'Username-Password-Authentication',
	email: 'email',
	sms: 'sms'
}
module.exports.USER_AUTHORIZATION_TYPES = Object.keys(exports.USER_AUTHORIZATION_TYPES_ENUM)

module.exports.ORDERLINESTATUS_ENUM = {
	CREATED: 'CREATED',
	ISSUED: 'ISSUED',
	ACCEPTED: 'ACCEPTED',
	SHIPPED: 'SHIPPED',
	RECEIVED: 'RECEIVED',
	REJECTED: 'REJECTED',
	SKIPPED: 'SKIPPED'
}
module.exports.ORDERLINESTATUS = Object.keys(exports.ORDERLINESTATUS_ENUM)

module.exports.ORDERLINESTATUS_SKIP_REASON_ENUM = {
	IN_STOCK: 'IN_STOCK',
	SUPPLIER_CHANGED: 'SUPPLIER_CHANGED',
	OTHER: 'OTHER'
}
module.exports.ORDERLINESTATUS_SKIP_REASON = Object.keys(exports.ORDERLINESTATUS_SKIP_REASON_ENUM)

module.exports.SEARCH_ASSET_TYPE_ENUM = {
	MATERIAL: 'MATERIAL',
	CERTIFICATE: 'CERTIFICATE',
	BADGE: 'BADGE',
	BRAND: 'BRAND',
	SUPPLIER: 'SUPPLIER',
	MANUFACTURER: 'MANUFACTURER'
}
module.exports.SEARCH_ASSET_TYPE = Object.keys(exports.SEARCH_ASSET_TYPE_ENUM)

module.exports.APPROVALSTATUS_ENUM = {
	DRAFT: 'DRAFT',
	REQUESTED: 'REQUESTED',
	APPROVED: 'APPROVED',
	ACKNOWLEDGED: 'ACKNOWLEDGED',
	REJECTED: 'REJECTED'
}
module.exports.APPROVALSTATUS = Object.keys(exports.APPROVALSTATUS_ENUM)

// What is the previous status option
module.exports.APPROVALSTATUS_TO = {
	[exports.APPROVALSTATUS_ENUM.DRAFT]: [],
	[exports.APPROVALSTATUS_ENUM.REQUESTED]: [exports.APPROVALSTATUS_ENUM.DRAFT],
	[exports.APPROVALSTATUS_ENUM.APPROVED]: [exports.APPROVALSTATUS_ENUM.REQUESTED],
	[exports.APPROVALSTATUS_ENUM.REJECTED]: [exports.APPROVALSTATUS_ENUM.REQUESTED],
	[exports.APPROVALSTATUS_ENUM.ACKNOWLEDGED]: [exports.APPROVALSTATUS_ENUM.REQUESTED]
}

// What is the next status option
module.exports.APPROVALSTATUS_FROM = {
	[exports.APPROVALSTATUS_ENUM.DRAFT]: [exports.APPROVALSTATUS_ENUM.REQUESTED],
	[exports.APPROVALSTATUS_ENUM.REQUESTED]: [
		exports.APPROVALSTATUS_ENUM.APPROVED,
		exports.APPROVALSTATUS_ENUM.REJECTED,
		exports.APPROVALSTATUS_ENUM.ACKNOWLEDGED
	],
	[exports.APPROVALSTATUS_ENUM.APPROVED]: [],
	[exports.APPROVALSTATUS_ENUM.REJECTED]: [],
	[exports.APPROVALSTATUS_ENUM.ACKNOWLEDGED]: []
}

module.exports.SORTORDER_ENUM = {
	DESC: 'DESC',
	ASC: 'ASC'
}
module.exports.SORTORDER = Object.keys(exports.SORTORDER_ENUM)

module.exports.BADGE_CATEGORY_ENUM = {
	SOCIAL: 'SOCIAL',
	ENVIRONMENTAL: 'ENVIRONMENTAL',
	TRANSPARENCY: 'TRANSPARENCY'
}
module.exports.BADGE_CATEGORY = Object.keys(exports.BADGE_CATEGORY_ENUM)

module.exports.BADGE_RULE_ENUM = {
	FAIR_PAYMENT: 'FAIR_PAYMENT',
	SAFE_WORK_ENVIRONMENT: 'SAFE_WORK_ENVIRONMENT',
	NO_SLAVERY: 'NO_SLAVERY',
	NO_CHILD_LABOUR: 'NO_CHILD_LABOUR',
	TRAINING_AND_EDUCATION: 'TRAINING_AND_EDUCATION',
	LONG_SUPPLIER_ENGAGEMENT: 'LONG_SUPPLIER_ENGAGEMENT',
	STRONG_LOCAL_ENGAGEMENT: 'STRONG_LOCAL_ENGAGEMENT',
	VOLUNTARY_COMMUNITY_SUPPORT: 'VOLUNTARY_COMMUNITY_SUPPORT',

	RESPONSIBLE_RAW_MATERIAL_SOURCING: 'RESPONSIBLE_RAW_MATERIAL_SOURCING',
	WASTE_REDUCTION: 'WASTE_REDUCTION',
	RENEWABLE_ENERGY_USAGE: 'RENEWABLE_ENERGY_USAGE',
	RESPONSIBLE_WATER_USAGE: 'RESPONSIBLE_WATER_USAGE',
	AIR_EMISSIONS: 'AIR_EMISSIONS',
	NO_HARZADOUS_CHEMICALS: 'NO_HARZADOUS_CHEMICALS',
	SUSTAINABLE_TRANSPORTION: 'SUSTAINABLE_TRANSPORTION',
	RESPONSBILE_CONSUMPTION: 'RESPONSBILE_CONSUMPTION',

	SUPPLY_CHAIN_TRANSPARENCY: 'SUPPLY_CHAIN_TRANSPARENCY',
	PRODUCT_TRANSPARENCY: 'PRODUCT_TRANSPARENCY'
}
module.exports.BADGE_RULE = Object.keys(exports.BADGE_RULE_ENUM)

module.exports.CLAIM_TYPE_ENUM = {
	CERTIFICATE: 'CERTIFICATE',
	BADGE: 'BADGE'
}
module.exports.CLAIM_TYPE = Object.keys(exports.CLAIM_TYPE_ENUM)

module.exports.GEOJSON_TYPE_ENUM = {
	Feature: 'Feature',
	FeatureCollection: 'FeatureCollection'
}
module.exports.GEOJSON_TYPE = Object.keys(exports.GEOJSON_TYPE_ENUM)

module.exports.GEOJSON_GEOMETRY_TYPE_ENUM = {
	Point: 'Point',
	MultiPoint: 'MultiPoint',
	LineString: 'LineString',
	MultiLineString: 'MultiLineString',
	Polygon: 'Polygon',
	MultiPolygon: 'MultiPolygon'
}
module.exports.GEOJSON_GEOMETRY_TYPE = Object.keys(exports.GEOJSON_GEOMETRY_TYPE_ENUM)

// Taken from glassdoor
module.exports.COMPANY_SIZE_ENUM = {
	FROM_0_TO_1: 'FROM_0_TO_1',
	FROM_2_TO_10: 'FROM_2_TO_10',
	FROM_11_TO_50: 'FROM_11_TO_50',
	FROM_51_TO_200: 'FROM_51_TO_200',
	FROM_201_TO_500: 'FROM_201_TO_500',
	FROM_501_TO_1000: 'FROM_501_TO_1000',
	FROM_1001_TO_5001: 'FROM_1001_TO_5001',
	FROM_5001_TO_10000: 'FROM_5001_TO_10000',
	FROM_10001_TO_INFINITE: 'FROM_10001_TO_INFINITE'
}
module.exports.COMPANY_SIZE = Object.keys(exports.COMPANY_SIZE_ENUM)

// Taken from glassdoor
module.exports.COMPANY_TYPE_ENUM = {
	EDUCATIONAL_INSTITUTION: 'EDUCATIONAL_INSTITUTION',
	GOVERNMENT_AGENCY: 'GOVERNMENT_AGENCY',
	NONPROFIT: 'NONPROFIT',
	PARTNERSHIP: 'PARTNERSHIP',
	PRIVATELY_HELD: 'PRIVATELY_HELD',
	FAMILY_BUSINESS: 'FAMILY_BUSINESS',
	PUBLIC_COMPANY: 'PUBLIC_COMPANY',
	SELF_EMPLOYED: 'SELF_EMPLOYED',
	SOLE_PROPRIETORSHIP: 'SOLE_PROPRIETORSHIP'
}
module.exports.COMPANY_TYPE = Object.keys(exports.COMPANY_TYPE_ENUM)

// Indicator on assets if they have been synced to the blockchain yet
module.exports.BLOCKCHAIN_STATUS_ENUM = {
	PENDING: 'PENDING',
	SYNCED: 'SYNCED',
	FAILURE: 'FAILURE',
	CANCELLED: 'CANCELLED'
}
module.exports.BLOCKCHAIN_STATUS = Object.keys(exports.BLOCKCHAIN_STATUS_ENUM)

module.exports.AUTH0_USER_AUTHORIZATION_TYPES_ENUM = {
	PENDING: 'PENDING',
	SYNCED: 'SYNCED',
	FAILURE: 'FAILURE'
}

module.exports.AUTH0_USER_AUTHORIZATION_TYPES = Object.keys(exports.AUTH0_USER_AUTHORIZATION_TYPES_ENUM)
