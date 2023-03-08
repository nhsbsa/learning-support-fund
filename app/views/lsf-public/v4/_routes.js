// ********************************
// LSF PUBLIC (v4)
// ********************************

// External dependencies
const e = require('express');
const express = require('express');
// const moment = require('moment');
const router = express.Router();

// ********************************

// Is this your final year?
router.post('/v4/final-year', (req, res) => {

    const finalYear = req.session.data['final-year']

    if (finalYear === 'yes') {
        res.redirect('/lsf-public/v4/full-part-time')
    } else if (finalYear === 'no') {
        res.redirect('/lsf-public/v4/course-applying-for')
    } else {
        res.redirect('/lsf-public/v4/final-year')
    }

})

// Student declaration
router.post('/v4/student-declaration', (req, res) => {

    const studentDeclaration = req.session.data['student-declaration']
    
    req.session.data['student-approved'] = 'approved'

    if (studentDeclaration) {
        res.redirect('/lsf-public/v4/academic-year-details')
    } else {
        res.redirect('/lsf-public/v4/student-declaration')
    }
    
})

// ********************************
// DHSC QUESTIONNAIRE
// ********************************

// Is this your first year of application?
router.post('/v4/DHSC-first-year-application', (req, res) => {

    const firstYearApplication = req.session.data['first-year-application']

    if (firstYearApplication === "yes") {
        res.redirect('/lsf-public/v4/DHSC-aware-of-grant')
    } else {
        res.redirect('/lsf-public/v4/DHSC-confident-living-expenses')
    }

})

// Were you aware of the availability of a grant prior to applying for a Nursing, Midwifery or Allied Health professional?
router.post('/v4/DHSC-aware-of-grant', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    if (awareOfGrant === 'yes') {
        res.redirect('/lsf-public/v4/DHSC-elements')
    } else {
        res.redirect('/lsf-public/v4/DHSC-how-important-funding')
    }

})


// Which elements were you aware of?
router.post('/v4/DHSC-elements', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    res.redirect('/lsf-public/v4/DHSC-how-important-funding-study')

})

// How important was funding to your decision on where to study?
router.post('/v4/DHSC-how-important-funding', (req, res) => {

    res.redirect('/lsf-public/v4/DHSC-how-important-funding-study')

})

// How important was funding to your decision on what to study?
router.post('/v4/DHSC-how-important-funding-study', (req, res) => {

    res.redirect('/lsf-public/v4/DHSC-alternative-subjects')

})

// If you considered alternative subjects, please list them below
router.post('/v4/DHSC-alternative-subjects', (req, res) => {

    res.redirect('/lsf-public/v4/DHSC-training-grant')

})

// How will the Training Grant make a difference?
router.post('/v4/DHSC-training-grant', (req, res) => {

    res.redirect('/lsf-public/v4/DHSC-concerns-finish-course')

})

// If you have any other concerns that may affect your ability to complete the course, provide details here
router.post('/v4/DHSC-concerns-finish-course', (req, res) => {

    res.redirect('/lsf-public/v4/DHSC-which-grant-applying-for')

})

// How confident are you about being able to cover living expenses in the next year?
router.post('/v4/DHSC-confident-living-expenses', (req, res) => {

    const confidentLivingCost = req.session.data['confident-living-cost']

    res.redirect('/lsf-public/v4/DHSC-may-leave-course')

})

//Over the last year, did you ever feel that you may have to leave your course?
router.post('/v4/DHSC-may-leave-course', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    if (mayLeaveCourse === "yes") {
        res.redirect('/lsf-public/v4/DHSC-factors-involved')
    } else {
        res.redirect('/lsf-public/v4/DHSC-expect-complete-final-year')
    }

})

// What were the key factors involved?
router.post('/v4/DHSC-factors-involved', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    res.redirect('/lsf-public/v4/DHSC-expect-complete-final-year')

})

// Do you expect to complete your final year on time?
router.post('/v4/DHSC-expect-complete-final-year', (req, res) => {

    const completeFinalYear = req.session.data['complete-final-year']

    if (completeFinalYear === "yes") {
        res.redirect('/lsf-public/v4/DHSC-work-following-graduation')
    } else {
        res.redirect('/lsf-public/v4/DHSC-reason-extra-time')
    }

})

// What is the reason for taking extra time to complete your course?
router.post('/v4/DHSC-reason-extra-time', (req, res) => {

    const reasonExtraTime = req.session.data['extra-time']

    res.redirect('/lsf-public/v4/DHSC-work-following-graduation')

})

// Where do you intend to work following graduation?
router.post('/v4/DHSC-work-following-graduation', (req, res) => {

    // const workFollowingGraduation = req.session.data['work-following-graduation']

    res.redirect('/lsf-public/v4/DHSC-year-start-employment')

})

// What year do you intend to start employment?
router.post('/v4/DHSC-year-start-employment', (req, res) => {

    const yearStartEmployment = req.session.data['year-start-employment']

    res.redirect('/lsf-public/v4/DHSC-which-grant-applying-for')

})

// Which grant component are you applying for?
router.post('/v4/DHSC-which-grant-applying-for', (req, res) => {

    const whichGrant = req.session.data['grant']

    res.redirect('/lsf-public/v4/DHSC-submit-questionnaire')

})

// Questionnaire submitted
router.post('/v4/DHSC-submit-questionnaire', (req, res) => {

    req.session.data['questionnaire-completed'] = 'Completed'

    res.redirect('/lsf-public/v4/academic-year-details')

})

// ********************************
// Training Grant Application
// ********************************

// Have you applied for a student loan?
router.post('/v4/APPLY-applied-student-loan', (req, res) => {

    const studentLoan = req.session.data['student-loan']

    if (studentLoan === 'yes') {
        res.redirect('/lsf-public/v4/APPLY-bank-details')
    } else {
        res.redirect('/lsf-public/v4/APPLY-nationality')
    }

})

// What is your nationality?
router.post('/v4/APPLY-nationality', (req, res) => {

    const nationality = req.session.data['nationality']

    res.redirect('/lsf-public/v4/APPLY-residency')

})

// Add residency
router.post('/v4/APPLY-add-residency', (req, res) => {

    res.redirect('/lsf-public/v4/APPLY-residency')

})

// Please enter your bank details
router.post('/v4/APPLY-bank-details', (req, res) => {

    const accountHolder = req.session.data['account-holder']
    const sortCode = req.session.data['sort-code']
    const accountNumber = req.session.data['account-number']
    const buildingSocietyNumber = req.session.data['building-society-number']

    res.redirect('/lsf-public/v4/APPLY-submit-your-evidence')

})

// Upload your Student loan award letter
router.post('/v4/APPLY-upload-sl-award-letter', (req, res) => {

    req.session.data['evidence-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v4/APPLY-submit-your-evidence')
    
})

// Evidence required
router.post('/v4/APPLY-submit-your-evidence', (req, res) => {
  
    res.redirect('/lsf-public/v4/APPLY-training-grant-submitted')
    
})

// You have now completed your Training Grant application
router.post('/v4/APPLY-training-grant-submitted', (req, res) => {
  
    req.session.data['training-grant-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v4/academic-year-details')
    
})


// ********************************
// TDAE Claim
// ********************************


// Do you receive travel support from Disabled Students Allowance?
router.post('/v4/TDAE-dsa-help', (req, res) => {
  
    const dsaSupport = req.session.data['dsa-support']

    if (dsaSupport === 'yes') {
        req.session.data['TDAE-signpost'] = 'DSA'
        res.redirect('/lsf-public/v4/TDAE-signpost/TDAE-dsa-signpost')
    } else {
        res.redirect('/lsf-public/v4/TDAE-placement-journey-same-days')
    }
    
})

router.post('/v4/TDAE-placement-journey-same-days', (req, res) => {

    const sameJourneyCosts = req.session.data['same-costs']

    if (sameJourneyCosts === 'yes') {
        res.redirect('/lsf-public/v4/TDAE-incur-costs')
    } else {
        res.redirect('/lsf-public/v4/TDAE-signpost/TDAE-not-same-journey-costs')
    }

})

router.post('/v4/TDAE-incur-cost', (req, res) => {

    // Date cost was incurred
    const incurDay = req.session.data['incur-cost-day']
    const incurMonth = req.session.data['incur-cost-month']
    const incurYear = req.session.data['incur-cost-year']

    const dateCostIncurred = incurDay + '/' + incurMonth + '/' + incurYear

    if (dateCostIncurred) {
        res.redirect('/lsf-public/v4/TDAE-travel-accommodation')
    } else {
        res.redirect('/lsf-public/v4/TDAE-signpost')
    }

})

router.post('/v4/TDAE-travel-accommodation', (req, res) => {

    const carJourney = req.session.data['car-journey']

    if (carJourney === 'yes') {
        req.session.data['eligible-online'] = 'yes'
        res.redirect('/lsf-public/v4/TDAE-task-list')
    } else {
        res.redirect('/lsf-public/v4/TDAE-signpost/TDAE-alternative-journey-signpost')
    }

})

router.post('/v4/TDAE-same-term-time-address', (req, res) => {

    const sameTermTimeAddress = req.session.data['same-term-address']

    if (sameTermTimeAddress === 'yes') {
        res.redirect('/lsf-public/v4/TDAE-normal-place-study')
    } else {
        res.redirect('/lsf-public/v4/TDAE-term-time-address')
    }

})

router.post('/v4/TDAE-term-time-address', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-normal-place-study')

})

router.post('/v4/TDAE-normal-place-study', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-normal-return-mileage')

})

router.post('/v4/TDAE-normal-return-mileage', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-normal-additional-costs-often')

})

router.post('/v4/TDAE-normal-additional-costs-often', (req, res) => {

    const normalOftenAdditionalCosts = req.session.data['normal-often-additional-costs']

    if (normalOftenAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v4/TDAE-normal-summary-cya')
    } else {
        res.redirect('/lsf-public/v4/TDAE-additional-costs')
    }

})

router.post('/v4/TDAE-additional-costs', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-additional-costs-comments')

})

router.post('/v4/TDAE-additional-costs-comments', (req, res) => {

    const provideComments = req.session.data['related-comments']

    if (provideComments === 'yes') {
        res.redirect('/lsf-public/v4/TDAE-comments')
    } else {
        res.redirect('/lsf-public/v4/TDAE-normal-summary-cya')
    }
    

})

router.post('/v4/TDAE-comments', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-normal-summary-cya')

})

router.post('/v4/TDAE-normal-summary-cya', (req, res) => {

    req.session.data['university-details'] = "completed"
    res.redirect('/lsf-public/v4/TDAE-task-list')

})


router.post('/v4/TDAE-placement-return-mileage', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-placement-additional-costs-often')

})

router.post('/v4/TDAE-placement-additional-costs-often', (req, res) => {

    const oftenAdditionalCosts = req.session.data['often-additional-costs']

    if (oftenAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v4/TDAE-placement-address')
    } else {
        res.redirect('/lsf-public/v4/TDAE-placement-additional-costs')
    }

})

router.post('/v4/TDAE-placement-additional-costs', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-placement-additional-comments')

})

router.post('/v4/TDAE-placement-additional-comments', (req, res) => {

    const placementAdditionalComments = req.session.data['placement-related-comments']

    if (placementAdditionalComments === 'yes') {
        res.redirect('/lsf-public/v4/TDAE-placement-comments')
    } else {
        res.redirect('/lsf-public/v4/TDAE-placement-address')
    }

})

router.post('/v4/TDAE-placement-comments', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-placement-address')

})

router.post('/v4/TDAE-placement-address', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-placement-journey-cya')

})

router.post('/v4/TDAE-placement-journey-cya', (req, res) => {

    req.session.data['placement-details'] = 'completed'
    res.redirect('/lsf-public/v4/TDAE-task-list')

})

router.post('/v4/TDAE-start-claim', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-end-claim')

})

router.post('/v4/TDAE-end-claim', (req, res) => {

    const startDateDay = req.session.data['start-claim-day']
    const startDateMonth = req.session.data['start-claim-month']
    const startDateYear = req.session.data['start-claim-year']
    const startDate = startDateDay + '-' + startDateMonth + '-' + startDateYear

    const endDateDay = req.session.data['end-claim-day']
    const endDateMonth = req.session.data['end-claim-month']
    const endDateYear = req.session.data['end-claim-year']
    const endDate = endDateDay + '-' + endDateMonth + '-' + endDateYear

    // following a set start and end date to view the different journey between more than 1 week and under 1 week
    // 1 week or less: 05-12-2022 to 09-12-2022
    // 2 weeks: 28-11-2022 to 09-12-2022

    if (startDate === '05-12-2022' && endDate === '09-12-2022') {
        res.redirect('/lsf-public/v4/TDAE-days-claiming')
    } else if (startDate === '28-11-2022' && endDate === '09-12-2022'){
        req.session.data['TDAE-multiple-weeks'] = 'yes'
        res.redirect('/lsf-public/v4/TDAE-claiming-same-days')
    } else {
        res.redirect('/lsf-public/v4/TDAE-end-claim')
    }

})

router.post('/v4/TDAE-claiming-same-days', (req, res) => {

    const claimingSameDays = req.session.data['claiming-same-days']

    if (claimingSameDays === 'yes'){
        res.redirect('/lsf-public/v4/TDAE-days-claiming')
    } else {
        res.redirect('/lsf-public/v4/TDAE-what-days-claiming-week')
    }

})

router.post('/v4/TDAE-what-days-claiming-week', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence')

})

router.post('/v4/TDAE-what-days-claiming-week-2', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence-2')

})

router.post('/v4/TDAE-what-days-claiming-week-cya', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-placement-return-mileage')

})

router.post('/v4/TDAE-days-claiming', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence-2')

})

// New evidence journey
router.post('/v4/TDAE-evidence-mini-cya', (req, res) => {

    const moreEvidence = req.session.data['more-evidence']

    if (moreEvidence === 'yes') {
        res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence-2')
    } else {
        res.redirect('/lsf-public/v4/TDAE-claim-date-evidence-cya')
    }
    

})

router.post('/v4/TDAE-type-journey-evidence', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence')

})

router.post('/v4/TDAE-placement-journey-evidence', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-evidence-summary')

})

router.post('/v4/TDAE-add-evidence-week', (req, res) => {

    const addEvidenceWeek = req.session.data['more-evidence']
    
    req.session.data['more-evidence'] = 'added'
    res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence-2')

})

router.post('/v4/TDAE-provide-journey-evidence', (req, res) => {

    const actionLink = req.session.data['action-required']

    if (actionLink === 'yes') {
        req.session.data['action-required'] = 'no'
        res.redirect('/lsf-public/v4/TDAE-returning-student/TDAE-task-list-actions')
    } else {
        req.session.data['add-date-evidence'] = 'completed'
        res.redirect('/lsf-public/v4/TDAE-task-list')
    }

})

router.post('/v4/TDAE-student-declaration', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-claim-submitted')

})

router.post('/v4/TDAE-claim-submitted', (req, res) => {

    req.session.data['TDAE-claim'] = 'Submitted'
    res.redirect('/lsf-public/v4/TDAE-returning-student/TDAE-active-claims')

})

// **************************************
// TDAE Claim - Action Required on Claim
// **************************************

router.post('/v4/TDAE-action-link', (req, res) => {

    req.session.data['action-required'] = 'yes'
    res.redirect('/lsf-public/v4/TDAE-returning-student/TDAE-task-list-actions')

})

router.post('/v4/TDAE-delete-evidence', (req, res) => {

    const deleteEvidence = req.session.data['delete-evidence']

    if (deleteEvidence === 'yes') {
        req.session.data['evidence-deleted'] = 'yes'
        res.redirect('/lsf-public/v4/TDAE-evidence-week-cya')
    } else {
        res.redirect('/lsf-public/v4/TDAE-evidence-week-cya')
    }

})

router.post('/v4/TDAE-evidence-week-cya', (req, res) => {

    res.redirect('/lsf-public/v4/TDAE-evidence-section-cya')

})

router.post('/v4/TDAE-add-more-evidence', (req, res) => {

    req.session.data['add-more-evidence'] = 'yes'
    res.redirect('/lsf-public/v4/TDAE-provide-journey-evidence-2')

})

router.post('/v4/TDAE-more-evidence-added', (req, res) => {

    req.session.data['more-evidence-added'] = 'yes'
    res.redirect('/lsf-public/v4/TDAE-evidence-week-cya')

})

router.post('/v4/TDAE-evidence-section-cya', (req, res) => {

    req.session.data['action-required'] = 'no'
    res.redirect('/lsf-public/v4/TDAE-returning-student/TDAE-task-list-actions')

})


module.exports = router;




