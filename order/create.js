const OrderCreateSchema = {
	type: 'object',
	required: ['variations'],
	additionalProperties: false,
	properties: {
		variations: {
			type: 'array',
			minLength: 1,
			items: {
				type: 'object',
				required: ['id', 'quantity'],
				additionalProperties: false,
				properties: {
					id: {type: 'string', minLength: 1},
					quantity: {type: 'number', exclusiveMinimum: 0, multipleOf: 1}
				}
			}
		}
	}
}

module.exports = {
	OrderCreateSchema
}
