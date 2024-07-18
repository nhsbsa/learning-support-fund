// ********************************
// LSF PORTAL (v5)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// ********************************
// Admin view
// ********************************


// Bank Details //

router.post('/v5/bank-details-pended', (req, res) => {

    const pend = req.session.data['pend']

    if (pend === 'contact') {
        res.redirect('/lsf-web/v5/bank-details-not-contacted')
    } else if (pend === 'fraud') {
        res.redirect('/lsf-web/v5/bank-details-fraud')
    } else {
        res.redirect('/lsf-web/v5/bank-details-id-required')
    }

})

router.post('/v5/bank-details-approve', (req, res) => {

    const approve = req.session.data['approve']

    if (approve === 'no') {
        res.redirect('/lsf-web/v5/bank-details-change-rejected')
    } else if (approve === 'pend') {
        res.redirect('/lsf-web/v5/bank-details-pended')
    } else {
        res.redirect('/lsf-web/v5/bank-details-changed')
    }

})

router.post('/v5/bank-details-contact', (req, res) => {

    res.redirect('/lsf-web/v5/bank-details-approve')

})

router.post('/v5/bank-details-new-details', (req, res) => {

    res.redirect('/lsf-web/v5/bank-details-contact')

})

router.post('/v5/bank-details-photo-id', (req, res) => {

    res.redirect('/lsf-web/v5/bank-details-new-details')

})

router.post('/v5/bank-details-check', (req, res) => {

    res.redirect('/lsf-web/v5/bank-details-photo-id')

})

// Create and Update User //

router.post('/v5/create-role', (req, res) => {

    const userRole = req.session.data['role']

    if (userRole.includes('HEI user') || userRole.includes('HEI admin') || userRole.includes('HEI read')) {
        res.redirect('/lsf-web/v5/admin-view/create-user-university-details');
    } else {
        res.redirect('/lsf-web/v5/admin-view/create-user-cya');
    }

})

router.post('/v5/update-role', (req, res) => {

    const userRole = req.session.data['role']

    if (userRole.includes('HEI user') || userRole.includes('HEI admin') || userRole.includes('HEI read')) {
        res.redirect('/lsf-web/v5/admin-view/update-user-university-details');
    } else {
        res.redirect('/lsf-web/v5/admin-view/update-user-cya');
    }

})

// Calculation Rates //

router.post('/v5/admin-view/add-calc-rates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-calc-rates')

})

router.post('/v5/admin-view/edit-calc-rates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-calc-rates')

})

router.post('/v5/admin-view/copy-calc-rates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-calc-rates')

})

// TDAE Rates //

router.post('/v5/admin-view/add-tdae-rates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-tdae-rates')

})

router.post('/v5/admin-view/edit-tdae-rates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-tdae-rates')

})

router.post('/v5/admin-view/copy-tdae-rates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-tdae-rates')

})

// Term Payment Percentages //

router.post('/v5/admin-view/add-term-percentages', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-term-percentages')

})

router.post('/v5/admin-view/edit-term-percentages', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-term-percentages')

})

router.post('/v5/admin-view/copy-term-percentages', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-term-percentages')

})

// Knowledge Base //

router.post('/v5/admin-view/add-item', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/preview-item')

})

router.post('/v5/admin-view/preview-item', (req, res) => {

    const addItem = req.session.data['enableKnowledgeItem']

    if (addItem === 'Yes') {
        res.redirect('/lsf-web/v5/admin-view/manage-knowledge-base')
    } else {
        res.redirect('/lsf-web/v5/admin-view/add-item')
    }

})

router.post('/v5/admin-view/edit-item', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/preview-item')

})

router.post('/v5/admin-view/delete-item', (req, res) => {

    const deleteItem = req.session.data['deleteItem']

    if (deleteItem === 'Yes') {
        res.redirect('/lsf-web/v5/admin-view/manage-knowledge-base')
    } else {
        res.redirect('/lsf-web/v5/admin-view/preview-item')
    }

})

// Enrolment Year //

router.post('/v5/admin-view/add-enrolment-year', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-enrolment-years')

})

// Note Types //

router.post('/v5/admin-view/add-note-type', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-note-types')

})

router.post('/v5/admin-view/edit-note-type', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-note-types')

})

// Forms //

router.post('/v5/admin-view/edit-form', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-forms')

})

// Payment Dates //

router.post('/v5/admin-view/add-enrolment-year', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-enrolment-years')

})

router.post('/v5/admin-view/manage-payment-dates', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-payment-dates-cya')

})

router.post('/v5/admin-view/manage-payment-dates-cya', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-enrolment-years')

})

// Payment Runs //

router.post('/v5/admin-view/add-payment-run', (req, res) => {

    res.redirect('/lsf-web/v5/admin-view/manage-payment-runs')

})

router.post('/v5/admin-view/delete-payment-run', (req, res) => {

    const deletePaymentRun = req.session.data['deletePaymentRun']

    if (deletePaymentRun === 'Yes') {
        res.redirect('/lsf-web/v5/admin-view/manage-payment-runs')
    } else {
        res.redirect('/lsf-web/v5/admin-view/manage-payment-runs')
    }

})


// ********************************
// Change student details
// ********************************

router.post('/v5/change-phone-number-validate', (req, res) => {

      res.redirect('/lsf-web/v5/change-phone-number')

})


// ********************************
// TDAE Claim
// ********************************

// TDAE Add feedback note
router.post('/v5/TDAE-add-feedback-note', (req, res) => {

    req.session.data['feedback-note'] = 'yes'

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

// TDAE Add additional TDAE feedback note
router.post('/v5/read-only/TDAE-add-feedback-note-2', (req, res) => {

    req.session.data['additional-feedback-note'] = 'yes'

    res.redirect('/lsf-web/v5/student-details#tab-Notes')

})


// Return to student decline or return
router.post('/v5/returnordecline', (req, res) => {

    const returnstudent = req.session.data['return-student']

    if (returnstudent === 'Return to univerity') {
        res.redirect('/lsf-web/v5/TDAE-send-to-student')
    } else {
        res.redirect('/lsf-web/v5/TDAE-details-for-return')
    }

})

router.post('/v5/current-search-student', (req, res) => {

    const studentNumber = req.session.data['student-ref']
    req.session.data['studentRef'] = studentNumber

    res.redirect('/lsf-web/v5/current-search-student-results')


})

router.post('/v5/TDAE-student-university-details', (req, res) => {

    const universityTravel = req.session.data['university-travel']

    if (universityTravel === 'yes') {
        req.session.data['university-travel'] = 'completed'
    } else {
        req.session.data['university-travel'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-checked-university-details', (req, res) => {

    const universityMatch = req.session.data['university-match']

    if (universityMatch === 'yes') {
        req.session.data['university-travel'] = 'completed'
    } else {
        req.session.data['university-travel'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-check', (req, res) => {

    const accommodationCheck = req.session.data['accommodation-check']

    if (accommodationCheck === 'yes') {
        req.session.data['accommodation-completed'] = 'completed'
    } else {
        req.session.data['accommodation-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-check-2', (req, res) => {

    const accommodationCheck2 = req.session.data['accommodation-check-2']

    if (accommodationCheck2 === 'yes') {
        req.session.data['accommodation-completed-2'] = 'completed'
    } else {
        req.session.data['accommodation-completed-2'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-check-3', (req, res) => {

    const accommodationCheck3 = req.session.data['accommodation-check-3']

    if (accommodationCheck3 === 'yes') {
        req.session.data['accommodation-completed-3'] = 'completed'
    } else {
        req.session.data['accommodation-completed-3'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-check-4', (req, res) => {

    const accommodationCheck4 = req.session.data['accommodation-check-4']

    if (accommodationCheck4 === 'yes') {
        req.session.data['accommodation-completed-4'] = 'completed'
    } else {
        req.session.data['accommodation-completed-4'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-travel-check', (req, res) => {

    const accommodationTravelCheck = req.session.data['accommodation-travel-check']

    if (accommodationTravelCheck === 'yes') {
        req.session.data['accommodation-travel-completed'] = 'completed'
    } else {
        req.session.data['accommodation-travel-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-travel-check-2', (req, res) => {

    const accommodationTravelCheck2 = req.session.data['accommodation-travel-check-2']

    if (accommodationTravelCheck2 === 'yes') {
        req.session.data['accommodation-travel-completed-2'] = 'completed'
    } else {
        req.session.data['accommodation-travel-completed-2'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-travel-check-3', (req, res) => {

    const accommodationTravelCheck3 = req.session.data['accommodation-travel-check-3']

    if (accommodationTravelCheck3 === 'yes') {
        req.session.data['accommodation-travel-completed-3'] = 'completed'
    } else {
        req.session.data['accommodation-travel-completed-3'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-accommodation-travel-check-4', (req, res) => {

    const accommodationTravelCheck4 = req.session.data['accommodation-travel-check-4']

    if (accommodationTravelCheck4 === 'yes') {
        req.session.data['accommodation-travel-completed-4'] = 'completed'
    } else {
        req.session.data['accommodation-travel-completed-4'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-evidence-match', (req, res) => {

    const evidenceMatch = req.session.data['evidence-match']

    if (evidenceMatch === 'yes') {
        req.session.data['evidence-completed'] = 'completed'
    } else {
        req.session.data['evidence-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-evidence-match-2', (req, res) => {

    const evidenceMatch2 = req.session.data['evidence-match-2']

    if (evidenceMatch2 === 'yes') {
        req.session.data['evidence-completed-2'] = 'completed'
    } else {
        req.session.data['evidence-completed-2'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-hire-vehicle-check', (req, res) => {

    const hireVehicleCheck = req.session.data['hire-vehicle-check']

    if (hireVehicleCheck === 'yes') {
        req.session.data['hire-vehicle-completed'] = 'completed'
    } else {
        req.session.data['hire-vehicle-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-taxi-check', (req, res) => {

    const taxiCheck = req.session.data['taxi-check']

    if (taxiCheck === 'yes') {
        req.session.data['taxi-completed'] = 'completed'
    } else {
        req.session.data['taxi-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-overseas', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-overseas-insurance-details')

})

router.post('/v5/TDAE-overseas-insurance-details', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-overseas-medical-tests-details')

})

router.post('/v5/TDAE-overseas-medical-tests-details', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-overseas-vaccinations-details')

})

router.post('/v5/TDAE-overseas-vaccinations-details', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-overseas-visa-fees-details')

})

router.post('/v5/TDAE-overseas-visa-fees-details', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-overseas-costs-summary')

})

router.post('/v5/TDAE-overseas-costs-summary', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-checked-overseas')

})

router.post('/v5/TDAE-overseas-check', (req, res) => {
    const overseasCheck = req.session.data['overseas-check'];

    if (overseasCheck === 'yes') {
        req.session.data['overseas-completed'] = 'completed';
    } else {
        req.session.data['overseas-completed'] = 'in-progress';
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim');

});


router.post('/v5/TDAE-authoriser-approved', (req, res) => {

    const heiApproved = req.session.data['hei-details']

    if (heiApproved === 'yes') {
        req.session.data['hei-completed'] = 'completed'
    } else {
        req.session.data['hei-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-approve-pend-reject', (req, res) => {

    const claimOutcome = req.session.data['what-claim-outcome']

    if (claimOutcome) {
        req.session.data['approve-in-progress'] = 'in-progress'
        res.redirect('/lsf-web/v5/TDAE-provide-nhsbsa-comments')
    } else {
        res.redirect('/lsf-web/v5/TDAE-approve-pend-reject')
    }

})

router.post('/v5/TDAE-provide-nhsbsa-comments', (req, res) => {

    const sendCommentsToNHSBSA = req.session.data['provide-comments-nhsbsa']

    if (sendCommentsToNHSBSA === 'yes') {
        res.redirect('/lsf-web/v5/TDAE-nhsbsa-comments')
    } else {
        res.redirect('/lsf-web/v5/TDAE-claim-declaration')
    }

})

router.post('/v5/TDAE-nhsbsa-comments', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-claim-declaration')

})


router.post('/v5/TDAE-claim-declaration', (req, res) => {

    const declarationSigned = req.session.data['claim-declaration']

    if (declarationSigned) {
        req.session.data['approve-in-progress'] = 'completed'
        res.redirect('/lsf-web/v5/TDAE-claim-submitted')
    } else {
        res.redirect('/lsf-web/v5/TDAE-claim-declaration')
    }

})

router.post('/v5/TDAE-send-to-student', (req, res) => {

    const returnStudent = req.session.data['return-student']

    res.redirect('/lsf-web/v5/TDAE-details-for-return')

})

router.post('/v5/TDAE-details-for-return', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-return-cya')

})

// ********************************
// TDAE Claim - Read only View
// ********************************


// TDAE Add feedback note
router.post('/v5/read-only/TDAE-add-feedback-note', (req, res) => {

    req.session.data['feedback-note'] = 'yes'

    res.redirect('/lsf-web/v5/read-only/TDAE-student-claim')

})

module.exports = router;
