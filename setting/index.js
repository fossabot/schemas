const PageSchema = {
	type: 'number',
	minimum: 0
}
const PageSizeSchema = {
	type: 'number',
	minimum: 0,
	maximum: 100
}

const SettingSchema = {
	type: 'object',
	required: [],
	additionalProperties: false,
	properties: {
		page: PageSchema,
		pageSize: PageSizeSchema
	}
}

module.exports = {
	PageSchema,
	PageSizeSchema,
	SettingSchema
}
