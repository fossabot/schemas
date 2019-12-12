const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid create URL body', t => {
	t.true(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.jpg'
		})
	)

	t.true(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.jpg',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}}
		})
	)

	// Invalid GeoJSON
	t.false(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.jpg',
			geojson: {
				type: 'Feature',
				geometry: {
					type: 'Polygon',
					coordinates: [
						[
							[14.853516, 53.173119],
							[24.960938, 52.321911],
							[23.730469, 48.283193],
							[15.46875, 45.02695],
							[4.21875, 46.255847],
							[14.853516, 53.173119]
						]
					]
				}
			}
		})
	)
})

test('File ending must obey the valid ones', t => {
	t.true(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.mov'
		})
	)

	t.false(
		ajv.validate(schemas.request.uploadUrl.create.body, {
			filename: 'test.doc'
		})
	)
})
