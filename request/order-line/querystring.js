module.exports.list = {
	type: 'object',
	additionalProperties: false,
	required: ['orderId'],
	properties: {
		orderId: {type: 'string'},
		status: {enum: ['to-separate']}
	}
}
