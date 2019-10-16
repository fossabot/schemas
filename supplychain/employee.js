const SupplyChainEmployeeSchema = {
	type: 'object',
	required: ['id'],
	additionalProperties: false,
	properties: {
		id: {type: 'string', minLength: 1}
	}
}

module.exports = {
	SupplyChainEmployeeSchema
}
