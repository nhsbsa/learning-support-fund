// ********************************
// LSF PORTAL (v3)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// ********************************
// TDAE Claim
// ********************************

// Return to student decline or return
router.post('/v4/returnordecline', (req, res) => {

    const returnstudent = req.session.data['return-student']

    if (returnstudent === 'Return to univerity') {
        res.redirect('/lsf-web/v3/TDAE-send-to-student')
    } else {
        res.redirect('/lsf-web/v3/TDAE-details-for-return')
    }

})

router.post('/v3/current-search-student', (req, res) => {

    const studentNumber = req.session.data['student-ref']
    req.session.data['studentRef'] = studentNumber

    res.redirect('/lsf-web/v3/current-search-student-results')


})

router.post('/v3/TDAE-accommodation-check', (req, res) => {

    const accommodationCheck = req.session.data['accommodation-check']

    if (accommodationCheck === 'yes') {
        req.session.data['accommodation-completed'] = 'completed'
    } else {
        req.session.data['accommodation-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v3/TDAE-student-claim')

})

router.post('/v3/TDAE-evidence-match', (req, res) => {

    const evidenceMatch = req.session.data['evidence-match']

    if (evidenceMatch === 'yes') {
        req.session.data['evidence-completed'] = 'completed'
    } else {
        req.session.data['evidence-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v3/TDAE-student-claim')

})

router.post('/v3/TDAE-university-match', (req, res) => {

    const universityMatch = req.session.data['university-match']

    if (universityMatch === 'yes') {
        req.session.data['university-completed'] = 'completed'
    } else {
        req.session.data['university-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v3/TDAE-student-claim')

})

router.post('/v3/TDAE-authoriser-approved', (req, res) => {

    const heiApproved = req.session.data['hei-details']

    if (heiApproved === 'yes') {
        req.session.data['hei-completed'] = 'completed'
    } else {
        req.session.data['hei-completed'] = 'in-progress'
    }

    res.redirect('/lsf-web/v3/TDAE-student-claim')

})

router.post('/v3/TDAE-approve-pend-reject', (req, res) => {

    const claimOutcome = req.session.data['what-claim-outcome']

    if (claimOutcome) {
        req.session.data['approve-in-progress'] = 'in-progress'
        res.redirect('/lsf-web/v3/TDAE-provide-nhsbsa-comments')
    } else {
        res.redirect('/lsf-web/v3/TDAE-approve-pend-reject')
    }

})

router.post('/v3/TDAE-provide-nhsbsa-comments', (req, res) => {

    const sendCommentsToNHSBSA = req.session.data['provide-comments-nhsbsa']

    if (sendCommentsToNHSBSA === 'yes') {
        res.redirect('/lsf-web/v3/TDAE-nhsbsa-comments')
    } else {
        res.redirect('/lsf-web/v3/TDAE-claim-declaration')
    }

})

router.post('/v3/TDAE-nhsbsa-comments', (req, res) => {

    res.redirect('/lsf-web/v3/TDAE-claim-declaration')

})


router.post('/v3/TDAE-claim-declaration', (req, res) => {

    const declarationSigned = req.session.data['claim-declaration']

    if (declarationSigned) {
        req.session.data['approve-in-progress'] = 'completed'
        res.redirect('/lsf-web/v3/TDAE-claim-submitted')
    } else {
        res.redirect('/lsf-web/v3/TDAE-claim-declaration')
    }

})

router.post('/v3/TDAE-send-to-student', (req, res) => {

    const returnStudent = req.session.data['return-student']

    res.redirect('/lsf-web/v3/TDAE-details-for-return')

})

router.post('/v3/TDAE-details-for-return', (req, res) => {

    res.redirect('/lsf-web/v3/TDAE-return-cya')

})






module.exports = router;
