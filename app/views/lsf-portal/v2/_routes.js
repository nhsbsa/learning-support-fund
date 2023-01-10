// ********************************
// LSF PORTAL (v2)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// CHANGE REQUEST
router.post('/v2/change-request', (req, res) => {

    const changeRequestType = req.session.data['change-request']

    if (changeRequestType === 'interruption') {
        res.redirect('/lsf-portal/v2/interruption')
    } else if (changeRequestType === 'attendance-status') {
        res.redirect('/lsf-portal/v2/change-attendance-status')
    } else if (changeRequestType === 'resume-student') {
        res.redirect('/lsf-portal/v2/resume-student')
    } else if (changeRequestType === 'course-details') {
        res.redirect('/lsf-portal/v2/change-course-details')
    } else if (changeRequestType === 'student-query') {
        res.redirect('/lsf-portal/v2/general-student-query')
    } else {
        res.redirect('/lsf-portal/v2/change-request')
    }
    
})

// ********************************
// TDAE Claim 
// ********************************

router.post('/v2/TDAE-evidence-match', (req, res) => {

    const evidenceMatch = req.session.data['evidence-match']

    if (evidenceMatch === 'yes') {
        req.session.data['evidence-completed'] = 'completed'
    } else {
        req.session.data['evidence-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v2/TDAE-student-claim')

})

router.post('/v2/TDAE-university-match', (req, res) => {

    const universityMatch = req.session.data['university-match']

    if (universityMatch === 'yes') {
        req.session.data['university-completed'] = 'completed'
    } else {
        req.session.data['university-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v2/TDAE-student-claim')

})

router.post('/v2/TDAE-approve-pend-reject', (req, res) => {

    const claimOutcome = req.session.data['what-claim-outcome']
    
    if (claimOutcome) {
        req.session.data['approve-in-progress'] = 'in-progress'
        res.redirect('/lsf-portal/v2/TDAE-claim-declaration')
    } else {
        res.redirect('/lsf-portal/v2/TDAE-approve-pend-reject')
    }

})

router.post('/v2/TDAE-claim-declaration', (req, res) => {

    const declarationSigned = req.session.data['claim-declaration']
    
    if (declarationSigned) {
        req.session.data['approve-in-progress'] = 'completed'
        res.redirect('/lsf-portal/v2/TDAE-claim-submitted')
    } else {
        res.redirect('/lsf-portal/v2/TDAE-claim-declaration')
    }

})

router.post('/v2/TDAE-send-to-student', (req, res) => {

    const returnStudent = req.session.data['return-student']
    
    res.redirect('/lsf-portal/v2/TDAE-details-for-return')

})

router.post('/v2/TDAE-details-for-return', (req, res) => {
    
    res.redirect('/lsf-portal/v2/TDAE-return-cya')

})






module.exports = router;




