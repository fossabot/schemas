const test = require('ava')
const AJV = require('ajv')
const schemas = require('../../..')

let ajv

test.before(() => {
	ajv = new AJV({allErrors: true})
})

test('Valid minimal badge claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			type: 'BADGE',
			claimingBadgeId: 'badge-id',
			claimingBadgeVersion: 1
		})
	)

	t.false(
		ajv.validate(schemas.request.claim.create.body, {
			type: 'BADGE',
			claimingBadgeId: 'badge-id',
			claimingBadgeVersion: '1'
		})
	)
})

test('Valid minimal certificate claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			type: 'CERTIFICATE',
			claimingCertificateId: 'certificate-id',
			claimingCertificateVersion: 1
		})
	)
})

test('Valid extensive certificate claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			claimantId: 'claimant-id',
			geojson: null,
			type: 'CERTIFICATE',
			claimingCertificateId: 'certificate-id',
			claimingCertificateVersion: 1,
			explanation: 'E',
			referenceClaimId: 'other-claim-id',
			referenceClaimVersion: 1,
			otherCompanyId: 'company-id',
			files: [{id: 'file-id'}]
		})
	)
})

test('Valid extensive badge claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			claimantId: 'claimant-id',
			geojson: null,
			type: 'BADGE',
			claimingBadgeId: 'badge-id',
			explanation: 'E',
			referenceClaimId: 'other-claim-id',
			referenceClaimVersion: 1,
			otherCompanyId: 'company-id',
			files: [{id: 'file-id'}]
		})
	)
})

test('Valid extensive badge claim with geojson', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			claimantId: 'claimant-id',
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
			type: 'BADGE',
			claimingBadgeId: 'badge-id',
			explanation: 'E',
			referenceClaimId: 'other-claim-id',
			referenceClaimVersion: 1,
			otherCompanyId: 'company-id',
			files: [{id: 'file-id'}]
		})
	)
})

test('Valid extensive certificate claim update', t => {
	t.true(
		ajv.validate(schemas.request.claim.update.body, {
			explanation: 'e',
			referenceClaimId: 'certificate-id',
			referenceClaimVersion: 1,
			files: [{id: 'file-id'}]
		})
	)

	t.false(
		ajv.validate(schemas.request.claim.update.body, {
			explanation: 'e',
			referenceClaimId: 'certificate-id',
			referenceClaimVersion: '1',
			files: [{id: 'file-id'}]
		})
	)
})

test('Valid request body', t => {
	t.true(
		ajv.validate(schemas.request.claim.request.body, {
			statusComment: 'Please request quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.claim.request.body, {}))

	t.true(ajv.validate(schemas.request.claim.request.body, null))
})

test('Valid approve body', t => {
	t.true(
		ajv.validate(schemas.request.claim.approve.body, {
			statusComment: 'Please approve quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.claim.approve.body, {}))

	t.true(ajv.validate(schemas.request.claim.approve.body, null))
})

test('Valid reject body', t => {
	t.true(
		ajv.validate(schemas.request.claim.reject.body, {
			statusComment: 'Please reject quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.claim.reject.body, {}))

	t.true(ajv.validate(schemas.request.claim.reject.body, null))
})

test('Valid acknowledge body', t => {
	t.true(
		ajv.validate(schemas.request.claim.acknowledge.body, {
			statusComment: 'Please acknowledge quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.claim.acknowledge.body, {}))

	t.true(ajv.validate(schemas.request.claim.acknowledge.body, null))
})
