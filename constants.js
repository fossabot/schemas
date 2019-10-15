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
