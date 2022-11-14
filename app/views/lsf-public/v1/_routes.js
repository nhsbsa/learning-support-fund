// ********************************
// LSF PUBLIC (v1)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// Is this your final year?
router.post('/v1/final-year', (req, res) => {

    const finalYear = req.session.data['final-year']

    if (finalYear === 'yes') {
        res.redirect('/lsf-public/v1/full-part-time')
    } else if (finalYear === 'no') {
        res.redirect('/lsf-public/v1/course-applying-for')
    } else {
        res.redirect('/lsf-public/v1/final-year')
    }

})

// Student declaration
router.post('/v1/student-declaration', (req, res) => {

    const studentDeclaration = req.session.data['student-declaration']
    req.session.data['student-approved'] = 'approved'

    if (studentDeclaration) {
        console.log('running this')
        res.redirect('/lsf-public/v1/academic-year-details')
    } else {
        console.log('running here')
        res.redirect('/lsf-public/v1/student-declaration')
    }
    
})

// ********************************
// DHSC QUESTIONNAIRE
// ********************************

// Is this your first year of application?
router.post('/v1/DHSC-first-year-application', (req, res) => {

    const firstYearApplication = req.session.data['first-year-application']

    if (firstYearApplication === "yes") {
        res.redirect('/lsf-public/v1/DHSC-aware-of-grant')
    } else {
        res.redirect('/lsf-public/v1/DHSC-confident-living-expenses')
    }

})

// Were you aware of the availability of a grant prior to applying for a Nursing, Midwifery or Allied Health professional?
router.post('/v1/DHSC-aware-of-grant', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    if (awareOfGrant === 'yes') {
        res.redirect('/lsf-public/v1/DHSC-elements')
    } else {
        res.redirect('/lsf-public/v1/DHSC-how-important-funding')
    }

})


// Which elements were you aware of?
router.post('/v1/DHSC-elements', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    res.redirect('/lsf-public/v1/DHSC-how-important-funding-study')

})

// How important was funding to your decision on where to study?
router.post('/v1/DHSC-how-important-funding', (req, res) => {

    res.redirect('/lsf-public/v1/DHSC-how-important-funding-study')

})

// How important was funding to your decision on what to study?
router.post('/v1/DHSC-how-important-funding-study', (req, res) => {

    res.redirect('/lsf-public/v1/DHSC-alternative-subjects')

})

// If you considered alternative subjects, please list them below
router.post('/v1/DHSC-alternative-subjects', (req, res) => {

    res.redirect('/lsf-public/v1/DHSC-training-grant')

})

// How will the Training Grant make a difference?
router.post('/v1/DHSC-training-grant', (req, res) => {

    res.redirect('/lsf-public/v1/DHSC-concerns-finish-course')

})

// If you have any other concerns that may affect your ability to complete the course, provide details here
router.post('/v1/DHSC-concerns-finish-course', (req, res) => {

    res.redirect('/lsf-public/v1/DHSC-which-grant-applying-for')

})

// How confident are you about being able to cover living expenses in the next year?
router.post('/v1/DHSC-confident-living-expenses', (req, res) => {

    const confidentLivingCost = req.session.data['confident-living-cost']

    res.redirect('/lsf-public/v1/DHSC-may-leave-course')

})

//Over the last year, did you ever feel that you may have to leave your course?
router.post('/v1/DHSC-may-leave-course', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    if (mayLeaveCourse === "yes") {
        res.redirect('/lsf-public/v1/DHSC-factors-involved')
    } else {
        res.redirect('/lsf-public/v1/DHSC-expect-complete-final-year')
    }

})

// What were the key factors involved?
router.post('/v1/DHSC-factors-involved', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    res.redirect('/lsf-public/v1/DHSC-expect-complete-final-year')

})

// Do you expect to complete your final year on time?
router.post('/v1/DHSC-expect-complete-final-year', (req, res) => {

    const completeFinalYear = req.session.data['complete-final-year']

    if (completeFinalYear === "yes") {
        res.redirect('/lsf-public/v1/DHSC-work-following-graduation')
    } else {
        res.redirect('/lsf-public/v1/DHSC-reason-extra-time')
    }

})

// What is the reason for taking extra time to complete your course?
router.post('/v1/DHSC-reason-extra-time', (req, res) => {

    const reasonExtraTime = req.session.data['extra-time']

    res.redirect('/lsf-public/v1/DHSC-work-following-graduation')

})

// Where do you intend to work following graduation?
router.post('/v1/DHSC-work-following-graduation', (req, res) => {

    const workFollowingGraduation = req.session.data['work-following-graduation']

    res.redirect('/lsf-public/v1/DHSC-year-start-employment')

})

// What year do you intend to start employment?
router.post('/v1/DHSC-year-start-employment', (req, res) => {

    const yearStartEmployment = req.session.data['year-start-employment']

    res.redirect('/lsf-public/v1/DHSC-which-grant-applying-for')

})

// Which grant component are you applying for?
router.post('/v1/DHSC-which-grant-applying-for', (req, res) => {

    const whichGrant = req.session.data['grant']

    res.redirect('/lsf-public/v1/DHSC-submit-questionnaire')

})

// Questionnaire submitted
router.post('/v1/DHSC-submit-questionnaire', (req, res) => {

    req.session.data['questionnaire-completed'] = 'Completed'

    res.redirect('/lsf-public/v1/academic-year-details')

})

// ********************************
// Training Grant Application
// ********************************

// Have you applied for a student loan?
router.post('/v1/APPLY-applied-student-loan', (req, res) => {

    const studentLoan = req.session.data['student-loan']

    if (studentLoan === 'yes') {
        res.redirect('/lsf-public/v1/APPLY-bank-details')
    } else {
        res.redirect('/lsf-public/v1/no')
    }

})

// Please enter your bank details
router.post('/v1/APPLY-bank-details', (req, res) => {

    const accountHolder = req.session.data['account-holder']
    const sortCode = req.session.data['sort-code']
    const accountNumber = req.session.data['account-number']
    const buildingSocietyNumber = req.session.data['building-society-number']

    res.redirect('/lsf-public/v1/APPLY-submit-your-evidence')

})

// Upload your Student loan award letter
router.post('/v1/APPLY-upload-sl-award-letter', (req, res) => {

    req.session.data['evidence-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v1/APPLY-submit-your-evidence')
    
})

// Evidence required
router.post('/v1/APPLY-submit-your-evidence', (req, res) => {
  
    res.redirect('/lsf-public/v1/APPLY-training-grant-submitted')
    
})

// You have now completed your Training Grant application
router.post('/v1/APPLY-training-grant-submitted', (req, res) => {
  
    req.session.data['training-grant-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v1/academic-year-details')
    
})




module.exports = router;




