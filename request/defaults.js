module.exports.request = {
	body: {
		oneOf: [
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
		oneOf: [
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
		oneOf: [
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
		oneOf: [
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

module.exports.remove = {
	body: {
		oneOf: [
			{
				type: 'object',
				required: [],
				additionalProperties: false,
				properties: {
					statusComment: {type: ['string', 'null'], minLength: 1, default: null},
					final: {type: 'boolean', default: false}
				}
			},
			{
				type: 'null'
			}
		]
	}
}
