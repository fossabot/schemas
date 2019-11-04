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

test('Detect invalid claims (neither badge nor certificate)', t => {
	t.false(
		ajv.validate(schemas.request.claim.create.body, {
			type: 'BADGE'
		})
	)

	t.false(
		ajv.validate(schemas.request.claim.create.body, {
			type: 'CERTIFICATE'
		})
	)
})

test('Valid extensive certificate claim update', t => {
	t.true(
		ajv.validate(schemas.request.claim.update.body, {
			referenceCertificateId: 'certificate-id',
			referenceCertificateVersion: 1,
			otherCompanyId: 'company-id',
			statusComment: 'Would love to have it!',
			files: [{id: 'file-id'}]
		})
	)
})

test('Cannot update claim with both badge and certificate ID', t => {
	t.false(
		ajv.validate(schemas.request.claim.update.body, {
			referenceBadge: 'other-badge-id',
			referenceCertificateId: 'certificate-id',
			referenceCertificateVersion: 1
		})
	)
})

test('Update must be eithere having still reference badge or reference certificate', t => {
	t.false(
		ajv.validate(schemas.request.claim.update.body, {
			referenceCertificateId: 'certificate-id'
		})
	)

	t.false(
		ajv.validate(schemas.request.claim.update.body, {
			referenceCertificateVersion: 1
		})
	)

	t.true(
		ajv.validate(schemas.request.claim.update.body, {
			referenceCertificateId: 'certificate-id',
			referenceCertificateVersion: 1,
			otherCompanyId: 'company-id',
			statusComment: 'Would love to have it!',
			files: [{id: 'file-id'}]
		})
	)

	t.true(
		ajv.validate(schemas.request.claim.update.body, {
			referenceBadge: 'badge-id'
		})
	)
})
