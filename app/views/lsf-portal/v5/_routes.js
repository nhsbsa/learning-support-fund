// ********************************
// LSF PORTAL (v5)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// Return to student decline or return
router.post('/v5/returnordecline', (req, res) => {

    const returnstudent = req.session.data['return-student']

    if (returnstudent === 'return') {
        res.redirect('/lsf-portal/v5/TDAE-send-to-student')
    } else {
        res.redirect('/lsf-portal/v5/TDAE-details-for-return')
    }

})

// Additional funding expectation
router.post('/v5/additionalfundingexpectation', (req, res) => {

    const additionalfundingexpectation = req.session.data['additionalfundingexpectation']

    if (additionalfundingexpectation === 'yes') {
        res.redirect('/lsf-portal/v5/change-additional-funding/expectation-comment')
    } else {
        res.redirect('/lsf-portal/v5/change-additional-funding/comment')
    }

})

// CHANGE REQUEST
router.post('/v5/change-request', (req, res) => {

    const changeRequestType = req.session.data['change-request']

    if (changeRequestType === 'interruption') {
        res.redirect('/lsf-portal/v5/interruption')
    } else if (changeRequestType === 'additional-funding') {
        res.redirect('/lsf-portal/v5/change-additional-funding/dates')
    } else if (changeRequestType === 'attendance-status') {
        res.redirect('/lsf-portal/v5/change-attendance-status')
    } else if (changeRequestType === 'resume-student') {
        res.redirect('/lsf-portal/v5/resume-student')
    } else if (changeRequestType === 'course-details') {
        res.redirect('/lsf-portal/v5/change-course-details')
    } else if (changeRequestType === 'student-query') {
        res.redirect('/lsf-portal/v5/general-student-query')
    } else {
        res.redirect('/lsf-portal/v5/change-request')
    }

})


// ********************************
// TDAE Claim
// ********************************

router.post('/v5/TDAE-accommodation-check', (req, res) => {

    const accommodationCheck = req.session.data['accommodation-check']

    if (accommodationCheck === 'yes') {
        req.session.data['accommodation-completed'] = 'completed'
    } else {
        req.session.data['accommodation-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-evidence-match', (req, res) => {

    const evidenceMatch = req.session.data['evidence-match']

    if (evidenceMatch === 'yes') {
        req.session.data['evidence-completed'] = 'completed'
    } else {
        req.session.data['evidence-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-university-match', (req, res) => {

    const universityMatch = req.session.data['university-match']

    if (universityMatch === 'yes') {
        req.session.data['university-completed'] = 'completed'
    } else {
        req.session.data['university-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v5/TDAE-student-claim')

})

router.post('/v5/TDAE-approve-pend-reject', (req, res) => {

    const claimOutcome = req.session.data['what-claim-outcome']

    if (claimOutcome) {
        req.session.data['approve-in-progress'] = 'in-progress'
        res.redirect('/lsf-portal/v5/TDAE-provide-nhsbsa-comments')
    } else {
        res.redirect('/lsf-portal/v5/TDAE-approve-pend-reject')
    }

})

router.post('/v5/TDAE-provide-nhsbsa-comments', (req, res) => {

    const sendCommentsToNHSBSA = req.session.data['provide-comments-nhsbsa']

    if (sendCommentsToNHSBSA === 'yes') {
        res.redirect('/lsf-portal/v5/TDAE-nhsbsa-comments')
    } else {
        res.redirect('/lsf-portal/v5/TDAE-claim-declaration')
    }

})

router.post('/v5/TDAE-nhsbsa-comments', (req, res) => {

    res.redirect('/lsf-portal/v5/TDAE-claim-declaration')

})


router.post('/v5/TDAE-claim-declaration', (req, res) => {

    const declarationSigned = req.session.data['claim-declaration']

    if (declarationSigned) {
        req.session.data['approve-in-progress'] = 'completed'
        res.redirect('/lsf-portal/v5/TDAE-claim-submitted')
    } else {
        res.redirect('/lsf-portal/v5/TDAE-claim-declaration')
    }

})

router.post('/v5/TDAE-send-to-student', (req, res) => {

    const returnStudent = req.session.data['return-student']

    res.redirect('/lsf-portal/v5/TDAE-details-for-return')

})

router.post('/v5/TDAE-details-for-return', (req, res) => {

    res.redirect('/lsf-portal/v5/TDAE-return-cya')

})






module.exports = router;
