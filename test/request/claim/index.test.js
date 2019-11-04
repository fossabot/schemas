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
			referenceBadge: 'badge-id'
		})
	)
})

test('Valid minimal certificate claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			type: 'CERTIFICATE',
			referenceCertificateId: 'certificate-id',
			referenceCertificateVersion: 1
		})
	)
})

test('Valid extensive certificate claim', t => {
	t.true(
		ajv.validate(schemas.request.claim.create.body, {
			claimantId: 'claimant-id',
			type: 'CERTIFICATE',
			referenceCertificateId: 'certificate-id',
			referenceCertificateVersion: 1,
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
			referenceBadge: 'badge-id',
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
			referenceCertificateId: 'certificate-id',
			referenceCertificateVersion: 1,
			referenceBadge: 'badge-id',
			statusComment: 'Would love to have it!',
			files: [{id: 'file-id'}]
		})
	)
})
