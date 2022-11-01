// ********************************
// LSF PORTAL (v1)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// CHANGE REQUEST
router.post('/v1/change-request', (req, res) => {

    const changeRequestType = req.session.data['change-request']

    if (changeRequestType === 'interruption') {
        res.redirect('/lsf-portal/v1/interruption')
    } else if (changeRequestType === 'attendance-status') {
        res.redirect('/lsf-portal/v1/change-attendance-status')
    } else if (changeRequestType === 'resume-student') {
        res.redirect('/lsf-portal/v1/resume-student')
    } else if (changeRequestType === 'course-details') {
        res.redirect('/lsf-portal/v1/change-course-details')
    } else if (changeRequestType === 'student-query') {
        res.redirect('/lsf-portal/v1/general-student-query')
    } else {
        res.redirect('/lsf-portal/v1/change-request')
    }
    
})



module.exports = router;




