const generator = require('../../lib/generator')

module.exports.list = {
	...generator.paginationParams,
	dropdown: {type: 'boolean', default: false}
}
