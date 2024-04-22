// ********************************
// LSF PORTAL (v9)
// ********************************

// External dependencies
const express = require('express');
const router = express.Router();

// ********************************

// TDAE Add feedback note
router.post('/v9/TDAE-add-feedback-note', (req, res) => {

    req.session.data['feedback-note'] = 'yes'

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

// COSA Maternity comments
router.post('/v9/COSA-status-reason', (req, res) => {

    res.redirect('/lsf-portal/v9/COSA-student-emailed')

})


// COSA Maternity comments
router.post('/v9/COSA-maternity-comments', (req, res) => {

    res.redirect('/lsf-portal/v9/COSA-maternity-confirmation')

})

// COSA Maternity dates
router.post('/v9/COSA-maternity-dates', (req, res) => {

    res.redirect('/lsf-portal/v9/COSA-maternity-comments')

})

// Return to student decline or return
router.post('/v9/COSA-student-emailed', (req, res) => {

    const location = req.session.data['location']

    if (location === 'confirmation') {
        res.redirect('/lsf-portal/v9/COSA-students-waiting-confirmation')
    } else {
        res.redirect('/lsf-portal/v9/COSA-students-declined')
    }

})

// Return to student decline or return
router.post('/v9/COSA-student-status-change', (req, res) => {

    const status = req.session.data['student-status']
    const location = req.session.data['location']

    if (status === 'In attendance' && location === 'declined') {
        res.redirect('/lsf-portal/v9/COSA-status-reason')
    } else if (status === 'Discontinued' || status === 'Not enrolled' || status === 'In attendance') {
        res.redirect('/lsf-portal/v9/COSA-student-emailed')
    } else if (status === 'Interruption') {
      res.redirect('/lsf-portal/v9/interruption')
    } else if (status === 'Information mismatch') {
      res.redirect('/lsf-portal/v9/COSA-information-mismatch-comment')
    } else {
        res.redirect('/lsf-portal/v9/COSA-maternity-dates')
    }

})

// Claims list
router.get('/v9/process-claim', (req, res) => {

    const name = req.session.data['name']

    req.session.data['status'] = 'To be completed'

    if (name === 'Emmit Mar') {
        req.session.data['status'] = 'To be completed'
        req.session.data['scenario'] = 'travel-only'
        req.session.data['late-submission'] = 'false'
        req.session.data['breakdown'] = 'walk'
        req.session.data['wrong-evidence'] = 'false'
        req.session.data['read-only'] = 'false'
        res.redirect('/lsf-portal/v9/TDAE-student-claim')
    }
    else if (name === 'Ben Bloggs') {
      req.session.data['status'] = 'To be completed'
      req.session.data['scenario'] = 'accommodation-only'
      req.session.data['late-submission'] = 'false'
      req.session.data['breakdown'] = 'walk'
      req.session.data['wrong-evidence'] = 'true'
      req.session.data['read-only'] = 'false'
      res.redirect('/lsf-portal/v9/TDAE-student-claim')
    }
    else if (name === 'Alyssa Geary') {
      req.session.data['status'] = 'To be completed'
      req.session.data['scenario'] = 'taxi-and-overseas-only'
      req.session.data['late-submission'] = 'false'
      req.session.data['breakdown'] = 'walk'
      req.session.data['wrong-evidence'] = 'false'
      req.session.data['read-only'] = 'false'
      res.redirect('/lsf-portal/v9/TDAE-student-claim')
    }
    else if (name === 'Daniel Jackson') {
      req.session.data['status'] = 'To be completed'
      req.session.data['scenario'] = 'accommodation-travel'
      req.session.data['late-submission'] = 'true'
      req.session.data['breakdown'] = 'walk'
      req.session.data['wrong-evidence'] = 'false'
      req.session.data['read-only'] = 'false'
      res.redirect('/lsf-portal/v9/TDAE-student-claim')
    }
    else {
        res.redirect('/lsf-portal/v9/TDAE-student-claim')
    }

})

//{% if data['Ansari'] == 'submitted' %}
//<a class="nhsuk-link--no-visited-state"
//    href="TDAE-student-claim?name=Emmit Mar&status=Submitted to NHSBSA&evidence-completed=completed&university-completed=completed&approve-in-progress=completed&read-only=true">View
//    claim</a>
//{% else %}
//<a class="nhsuk-link--no-visited-state"
//    href="TDAE-student-claim?name=Emmit Mar&status=To be completed&evidence-completed=&university-completed=&approve-in-progress=&read-only=">Process
//    claim</a>
//{% endif %}

// Return to student decline or return
router.post('/v9/returnordecline', (req, res) => {

    const returnstudent = req.session.data['return-student']

    if (returnstudent === 'Return to student') {
        res.redirect('/lsf-portal/v9/TDAE-send-to-student')
    } else {
        res.redirect('/lsf-portal/v9/TDAE-details-for-return')
    }

})

// Additional funding expectation
router.post('/v9/additionalfundingexpectation', (req, res) => {

    const additionalfundingexpectation = req.session.data['additionalfundingexpectation']

    if (additionalfundingexpectation === 'yes') {
        res.redirect('/lsf-portal/v9/change-additional-funding/expectation-comment')
    } else {
        res.redirect('/lsf-portal/v9/change-additional-funding/comment')
    }

})

// CHANGE REQUEST
router.post('/v9/change-request', (req, res) => {

    const changeRequestType = req.session.data['change-request']

    if (changeRequestType === 'interruption') {
        res.redirect('/lsf-portal/v9/interruption')
    } else if (changeRequestType === 'additional-funding') {
        res.redirect('/lsf-portal/v9/change-additional-funding/dates')
    } else if (changeRequestType === 'attendance-status') {
        res.redirect('/lsf-portal/v9/change-attendance-status')
    } else if (changeRequestType === 'resume-student') {
        res.redirect('/lsf-portal/v9/resume-student')
    } else if (changeRequestType === 'course-details') {
        res.redirect('/lsf-portal/v9/change-course-details')
    } else if (changeRequestType === 'student-query') {
        res.redirect('/lsf-portal/v9/general-student-query')
    } else {
        res.redirect('/lsf-portal/v9/change-request')
    }

})


// ********************************
// TDAE Claim
// ********************************

router.post('/v9/TDAE-accommodation-check', (req, res) => {

    const accommodationCheck = req.session.data['accommodation-check']

    if (accommodationCheck === 'yes') {
        req.session.data['accommodation-completed'] = 'completed'
    } else {
        req.session.data['accommodation-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-accommodation-check-2', (req, res) => {

    const accommodationCheck2 = req.session.data['accommodation-check-2']

    if (accommodationCheck2 === 'yes') {
        req.session.data['accommodation-completed-2'] = 'completed'
    } else {
        req.session.data['accommodation-completed-2'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-evidence-match', (req, res) => {

  const evidenceMatch = req.session.data['evidence-match']

  if (evidenceMatch === 'yes') {
      req.session.data['evidence-completed'] = 'completed'
  } else {
      req.session.data['evidence-completed'] = 'in-progress'
  }

  res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-evidence-match-2', (req, res) => {

  const evidenceMatch2 = req.session.data['evidence-match-2']

  if (evidenceMatch2 === 'yes') {
      req.session.data['evidence-completed-2'] = 'completed'
  } else {
      req.session.data['evidence-completed-2'] = 'in-progress'
  }

  res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-checked-hire-vehicle', (req, res) => {

    const vehicleHireCheck = req.session.data['vehicle-hire-check']

    if (vehicleHireCheck === 'yes') {
      res.redirect('/lsf-portal/v9/TDAE-checked-hire-vehicle-comments')
    } else {
      res.redirect('/lsf-portal/v9/TDAE-student-claim')
    }

  })

  router.post('/v9/TDAE-checked-hire-vehicle-2', (req, res) => {

      const vehicleHireCheck2 = req.session.data['vehicle-hire-check-2']

      if (vehicleHireCheck2 === 'yes') {
        res.redirect('/lsf-portal/v9/TDAE-checked-hire-vehicle-comments')
      } else {
        res.redirect('/lsf-portal/v9/TDAE-student-claim')
      }

    })

router.post('/v9/TDAE-checked-hire-vehicle-comments', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-checked-taxi', (req, res) => {

    const taxiCheck = req.session.data['taxi-check']

    if (taxiCheck === 'yes') {
        req.session.data['taxi-completed'] = 'completed'
    } else {
        req.session.data['taxi-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v9/TDAE-checked-taxi-comments')

})

router.post('/v9/TDAE-checked-taxi-comments', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-overseas', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-overseas-insurance-details')

})

router.post('/v9/TDAE-overseas-insurance-details', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-overseas-medical-tests-details')

})

router.post('/v9/TDAE-overseas-medical-tests-details', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-overseas-vaccinations-details')

})

router.post('/v9/TDAE-overseas-vaccinations-details', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-overseas-visa-fees-details')

})

router.post('/v9/TDAE-overseas-visa-fees-details', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-overseas-costs-summary')

})

router.post('/v9/TDAE-overseas-costs-summary', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-checked-overseas')

})

router.post('/v9/TDAE-checked-overseas', (req, res) => {

    const overseasCheck = req.session.data['overseas-check']

    if (overseasCheck === 'yes') {
        req.session.data['overseas-completed'] = 'completed'
    } else {
        req.session.data['overseas-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v9/TDAE-checked-overseas-comments')

})

router.post('/v9/TDAE-checked-overseas-comments', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})


router.post('/v9/TDAE-university-match', (req, res) => {

    const universityMatch = req.session.data['university-match']

    if (universityMatch === 'yes') {
        req.session.data['university-completed'] = 'completed'
    } else {
        req.session.data['university-completed'] = 'in-progress'
    }

    res.redirect('/lsf-portal/v9/TDAE-student-claim')

})

router.post('/v9/TDAE-approve-pend-reject', (req, res) => {

    const claimOutcome = req.session.data['what-claim-outcome']

    if (claimOutcome) {
        req.session.data['approve-in-progress'] = 'in-progress'
        res.redirect('/lsf-portal/v9/TDAE-provide-nhsbsa-comments')
    } else {
        res.redirect('/lsf-portal/v9/TDAE-approve-pend-reject')
    }

})

router.post('/v9/TDAE-provide-nhsbsa-comments', (req, res) => {

    const sendCommentsToNHSBSA = req.session.data['provide-comments-nhsbsa']

    if (sendCommentsToNHSBSA === 'yes') {
        res.redirect('/lsf-portal/v9/TDAE-nhsbsa-comments')
    } else {
        res.redirect('/lsf-portal/v9/TDAE-claim-declaration')
    }

})

router.post('/v9/TDAE-nhsbsa-comments', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-claim-declaration')

})


router.post('/v9/TDAE-claim-declaration', (req, res) => {

    const declarationSigned = req.session.data['claim-declaration']

    if (declarationSigned) {
        req.session.data['approve-in-progress'] = 'completed'
        res.redirect('/lsf-portal/v9/TDAE-claim-submitted')
    } else {
        res.redirect('/lsf-portal/v9/TDAE-claim-declaration')
    }

})

router.post('/v9/TDAE-send-to-student', (req, res) => {

    const returnStudent = req.session.data['return-student']

    res.redirect('/lsf-portal/v9/TDAE-details-for-return')

})

router.post('/v9/TDAE-details-for-return', (req, res) => {

    res.redirect('/lsf-portal/v9/TDAE-return-cya')

})






module.exports = router;
