// ********************************
// LSF PORTAL (v4)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// ********************************
// Admin view
// ********************************

router.post('/v5/create-role', (req, res) => {

    const userRole = req.session.data['role']

    if (userRole.includes('HEI user') || userRole.includes('HEI admin') || userRole.includes('HEI read')) {
        res.redirect('/lsf-web/v5/admin-view/create-user-university-details');
    } else {
        res.redirect('/lsf-web/v5/admin-view/create-user-location');
    }

})

// ********************************
// Change student details
// ********************************

router.post('/v5/change-phone-number-validate', (req, res) => {

    const correctCode = req.session.data['correct-code']

    if (correctCode === 'no send') {
      req.session.data['send-again'] = 'true'
      res.redirect('/lsf-web/v5/change-phone-number-validate')
    } else if (correctCode === 'no cancel') {
      res.redirect('/lsf-web/v5/student-details-change')
    } else {
      res.redirect('/lsf-web/v5/change-phone-number-changed')
    }

})


// ********************************
// TDAE Claim
// ********************************

// Test journey //
// Create new user

// Select user role
router.post('/v5/create-user-roles', (req, res) => {

    const userRole = req.session.data['user-role']

    if (userRole === 'role-1' || userRole === 'role-2' || userRole === 'role-3' || userRole === 'role-4' || userRole === 'role-5' || userRole === 'role-6' || userRole === 'role-7' || userRole === 'role-8') {
        res.redirect('/lsf-web/v5/admin-view/create-user-location');
    } else if (userRole === 'role-9' || userRole === 'role-10' || userRole === 'role-11') {
        res.redirect('/lsf-web/v5/admin-view/create-user-university-details');
    } else {
        // Handle other roles or provide a default redirect
        res.redirect('/some-default-path');
    }
});



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

router.post('/v4/TDAE-evidence-match', (req, res) => {

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

router.post('/v5/TDAE-checked-hire-vehicle', (req, res) => {

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-university-match', (req, res) => {

    const universityMatch = req.session.data['university-match']

    if (universityMatch === 'yes') {
        req.session.data['university-completed'] = 'completed'
    } else {
        req.session.data['university-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v5/TDAE-student-claim')

})

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

module.exports = router;
