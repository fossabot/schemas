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
			claimingBadgeId: 'badge-id'
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
			type: 'CERTIFICATE',
			claimingCertificateId: 'certificate-id',
			claimingCertificateVersion: 1,
			explanation: 'E',
			referenceClaimId: 'other-claim-id',
			referenceClaimVersion: 1,
			otherCompanyId: 'company-id',
			statusComment: 'Would love to have it!',
			files: [{id: 'file-id'}]
		})
	)
})

test('Valid extensive badge claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			claimantId: 'claimant-id',
			type: 'BADGE',
			claimingBadgeId: 'badge-id',
			explanation: 'E',
			referenceClaimId: 'other-claim-id',
			referenceClaimVersion: 1,
			otherCompanyId: 'company-id',
			statusComment: 'Would love to have it!',
			files: [{id: 'file-id'}]
		})
	)
})

test('Valid extensive certificate claim update', t => {
	t.true(
		ajv.validate(schemas.request.claim.update.body, {
			explanation: 'e',
			claimingCertificateId: 'certificate-id',
			claimingCertificateVersion: 1,
			claimingBadgeId: 'badge-id',
			statusComment: 'Would love to have it!',
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

test('Valid abandon body', t => {
	t.true(
		ajv.validate(schemas.request.claim.abandon.body, {
			statusComment: 'Please abandon quickly!'
		})
	)

	t.true(ajv.validate(schemas.request.claim.abandon.body, {}))

	t.true(ajv.validate(schemas.request.claim.abandon.body, null))
})
