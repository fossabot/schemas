module.exports.analysis = {
	type: 'object',
	required: ['type'],
	additionalProperties: false,
	properties: {
		type: {type: 'string', enum: ['most-scanned', 'scans-per-day', 'locations']},
		start: {type: 'string', format: 'date'},
		end: {type: 'string', format: 'date'}
	}
}
