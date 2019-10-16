const OrderStatusUpdateSchema = {
	type: 'object',
	required: ['updatedAt'],
	additionalProperties: false,
	properties: {
		fileId: {type: ['string', 'null'], minLength: 1},
		updatedAt: {type: ['string', 'null'], format: 'date-time'}
	}
}

module.exports = {
	OrderStatusUpdateSchema
}
