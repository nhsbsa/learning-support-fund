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



module.exports = router;




