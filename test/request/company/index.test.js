const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Company create schema', t => {
	// Minimal schema
	t.true(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'd',
			country: 'VI',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	// Additional fields
	t.true(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'egg',
			country: 'VI',
			companySize: 'FROM_2_TO_10',
			companyType: 'EDUCATIONAL_INSTITUTION',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			videoUrl: 'https://github.com/epoberezkin/ajv',
			founded: 1990,
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	// Invalid GeoJSON
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			country: 'VI',
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
			},
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	// No description
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: null,
			country: 'VI',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	// Invalid video URL
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'd',
			videoUrl: 'no-url',
			country: 'VI',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('Company create schema without country information is invalid', t => {
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'egg',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('Schema with invalid country code is rejected', t => {
	t.false(
		ajv.validate(schemas.request.company.create.body, {
			taxNo: 'tax',
			officialName: 'official name',
			description: 'egg',
			country: 'AP',
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)
})

test('Valid update schema is accepted', t => {
	t.true(
		ajv.validate(schemas.request.company.update.body, {
			geojson: {type: 'Feature', geometry: {type: 'Point', coordinates: [1, 1]}},
			description: 'egg',
			pictures: [
				{
					id: 'FILE-ID'
				}
			]
		})
	)

	t.false(
		ajv.validate(schemas.request.company.update.body, {
			description: null
		})
	)

	t.false(
		ajv.validate(schemas.request.company.update.body, {
			videoUrl: 'ionvalid-url'
		})
	)
})
