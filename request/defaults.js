module.exports.request = {
	body: {
		anyOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.approve = {
	body: {
		anyOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.reject = {
	body: {
		anyOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}

module.exports.acknowledge = {
	body: {
		anyOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null}
				}
			},
			{
				type: 'null'
			}
		]
	}
}
