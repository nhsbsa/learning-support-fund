// ********************************
// LSF PUBLIC (v7)
// ********************************

// External dependencies
const e = require('express');
const express = require('express');
const session = require('express-session');
// const moment = require('moment');
const router = express.Router();

// ********************************

router.post('/v7/TDAE-sure-remove', (req, res) => {

  const remove = req.session.data['remove']

  if (remove === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-task-list')
  } else {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-invalid-costs-partial')
  }


})

router.post('/v7/TDAE-invalid-costs-partial', (req, res) => {

  const invalidCostsPartial = req.session.data['invalid-costs-partial']

  if (invalidCostsPartial === 'change-details') {
      res.redirect('/lsf-public/v7/TDAE-placement-itinerary')
  }  else if (invalidCostsPartial === 'remove') {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-sure-remove')
  } else {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-invalid-costs-partial')
  }


})

router.post('/v7/TDAE-sure-delete', (req, res) => {

  const deleteClaim = req.session.data['delete']

  if (deleteClaim === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-returning-student/academic-year-details')
  } else {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-invalid-costs-all')
  }


})

router.post('/v7/TDAE-sure-remove-all', (req, res) => {

  const removeAll = req.session.data['remove-all']

  if (removeAll === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-task-list')
  } else {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-invalid-costs-all')
  }


})

router.post('/v7/TDAE-invalid-costs-all', (req, res) => {

  const invalidCostsAll = req.session.data['invalid-costs-all']

  if (invalidCostsAll === 'change-details') {
      res.redirect('/lsf-public/v7/TDAE-placement-itinerary')
  }
  else if (invalidCostsAll === 'remove-all') {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-sure-remove-all')
  }
  else if (invalidCostsAll === 'delete') {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-sure-delete')
  } else {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-invalid-costs-all')
  }


})

router.post('/v7/TDAE-costs-already-claimed', (req, res) => {

  const alreadyClaimed = req.session.data['already-claimed']

  if (alreadyClaimed === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-reuse-answers')
  } else {
      res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-costs-already-claimed')
  }


})

// TDAE public transport

router.post('/v7/TDAE-public-transport-pause', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-public-transport-type')

})

router.post('/v7/TDAE-public-transport-type', (req, res) => {
  // Check if req.session.data['public-transport-type'] is defined and convert to string
  if (req.session.data['public-transport-type']) {
    const transportTypeReplaceCommas = req.session.data['public-transport-type'].toString().replace(/,/g, '');

    req.session.data['public-transport-type'] = transportTypeReplaceCommas;
  }

  res.redirect('/lsf-public/v7/TDAE-public-transport-daily-cost');
});

router.post('/v7/TDAE-public-transport-ticket', (req, res) => {

  const publicTransportTicket = req.session.data['public-transport-ticket']

  if (publicTransportTicket === 'Daily ticket') {
    req.session.data['daily'] = 'yes';
    res.redirect('/lsf-public/v7/TDAE-public-transport-repeated');
  } else {
    req.session.data['multiple'] = 'yes';
    res.redirect('/lsf-public/v7/TDAE-public-transport-dates');
  }

})

router.post('/v7/TDAE-public-transport-daily-cost', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-public-transport-ticket');

})

router.post('/v7/TDAE-public-transport-dates', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-public-transport-days');

})

router.post('/v7/TDAE-public-transport-repeated', (req, res) => {

  const publicTransportRepeated = req.session.data['public-transport-repeated']

  if (publicTransportRepeated === 'Yes') {
    res.redirect('/lsf-public/v7/TDAE-public-transport-days')
  } else {
    res.redirect('/lsf-public/v7/TDAE-public-transport-day');
  }

})

router.post('/v7/TDAE-public-transport-days', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-public-transport-check')

})

router.post('/v7/TDAE-public-transport-check', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-public-transport-overview')

})

router.post('/v7/TDAE-public-transport-overview', (req, res) => {

  const publicTransportAddAnother = req.session.data['public-transport-add-another']

  if (publicTransportAddAnother === 'Yes') {
    res.redirect('/lsf-public/v7/TDAE-public-transport-type')
  } else {
    res.redirect('/lsf-public/v7/TDAE-placement-itinerary');
  }

})

// TDAE Reuse previous claim answers

router.post('/v7/TDAE-reuse-details', (req, res) => {

  const reusedDetails = req.session.data['reused-details']
  const claimReused = req.session.data['claim-reused']

  req.session.data['submit-claim'] = "incomplete"

  if (reusedDetails.indexOf('placement-address-1') === -1 && reusedDetails.indexOf('placement-address-2') === -1) {
    res.redirect('/lsf-public/v7/TDAE-placement-address')
  } else if (reusedDetails.indexOf('term-time-address') === -1) {
    req.session.data['address-number'] = "1"
    res.redirect('/lsf-public/v7/TDAE-same-term-time-address')
  } else {
    req.session.data['address-number'] = "1"
    req.session.data['term-building-name'] = "Stephenson House"
    req.session.data['term-address-line-1'] = "Stoddart St"
    req.session.data['term-address-line-2'] = "Shieldfield"
    req.session.data['term-address-town'] = "Newcastle upon Tyne"
    req.session.data['term-address-postcode'] = "NE2 1AW"
    if (claimReused === 'Alnwick') {
      req.session.data['placement-building-name'] = "Alnwick Hospital"
      req.session.data['placement-address-line-1'] = "Main Street"
      req.session.data['placement-address-town'] = "Alnwick"
      req.session.data['placement-address-postcode'] = "NE6 4EA"
    } else {
      req.session.data['placement-building-name'] = "Newcastle Hospital"
      req.session.data['placement-address-line-1'] = "Main Street"
      req.session.data['placement-address-town'] = "Newcastle upon Tyne"
      req.session.data['placement-address-postcode'] = "NE1 1AA"
    }
    if (reusedDetails.indexOf('university-travel-details') !== -1) {
        req.session.data['university-details'] = "reused";
    }
    res.redirect('/lsf-public/v7/TDAE-eligibility-cya')
  }

})

router.post('/v7/TDAE-reuse-claim', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-reuse-details')

})

router.post('/v7/TDAE-reuse-answers', (req, res) => {

  const reuseAnswers = req.session.data['reuse-answers']

  if (reuseAnswers === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-reuse-claim')
  } else {
    res.redirect('/lsf-public/v7/TDAE-placement-address')
  }

})

// TDAE Hire car
router.post('/v7/TDAE-hire-car-pause', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-hire-car-cost')

})

router.post('/v7/TDAE-hire-car-cost', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-hire-car-return')

})

router.post('/v7/TDAE-hire-car-return', (req, res) => {

    const hireCarReturn = req.session.data['hire-car-return']
  
    if (hireCarReturn === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-hire-car-authorisation')
    } else {
      res.redirect('/lsf-public/v7/TDAE-hire-car-dates')
    }
  
  })

router.post('/v7/TDAE-hire-car-dates', function (req, res) {

    res.redirect('/lsf-public/v7/TDAE-hire-car-authorisation')

})

router.post('/v7/TDAE-hire-car-authorisation', function (req, res) {

    res.redirect('/lsf-public/v7/TDAE-hire-car-reason')

})

router.post('/v7/TDAE-hire-car-reason', function (req, res) {

    res.redirect('/lsf-public/v7/TDAE-hire-car-evidence')

})


router.post('/v7/TDAE-hire-car-evidence', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-hire-car-mini-cya')

})

router.post('/v7/TDAE-hire-car-mini-cya', (req, res) => {

  const moreEvidence = req.session.data['more-evidence']

  if (moreEvidence === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-hire-car-evidence')
  } else {
    res.redirect('/lsf-public/v7/TDAE-hire-car-comment')
  }

})

router.post('/v7/TDAE-hire-car-comment', (req, res) => {

  const hireCarComments = req.session.data['hire-car-comments']

  if (hireCarComments === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-hire-car-add-comment')
  } else {
    res.redirect('/lsf-public/v7/TDAE-hire-car-add-more')
  }

})

router.post('/v7/TDAE-hire-car-add-comment', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-hire-car-add-more')

})

router.post('/v7/TDAE-hire-car-add-more', (req, res) => {

  const moreVehicles = req.session.data['more-vehicles']

  if (moreVehicles === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-hire-car-cost')
  } else {
    res.redirect('/lsf-public/v7/TDAE-hire-car-check')
  }

})

router.post('/v7/TDAE-hire-car-check', (req, res) => {

    req.session.data['hire-car'] = "completed"

    res.redirect('/lsf-public/v7/TDAE-task-list')

})

router.post('/v7/TDAE-hire-car-remove-vehicle', (req, res) => {

  const removeVehicle = req.session.data['remove-vehicle']

  if (removeVehicle === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-hire-car-check')
  } else {
    res.redirect('/lsf-public/v7/TDAE-hire-car-check')
  }

})

// TDAE Hire car ENDS

router.post('/v7/TDAE-placement-additional-daily-total', (req, res) => {

  const repeatedCost = req.session.data['repeated-cost']

  if (repeatedCost === 'Yes') {
    res.redirect('/lsf-public/v7/TDAE-placement-evidence-day')
  } else {
    res.redirect('/lsf-public/v7/TDAE-placement-evidence-days')
  }

})

router.post('/v7/TDAE-placement-additional-cost-single-day', (req, res) => {

  const additionalCostSingleDay = req.session.data['additional-cost-single-day']

  if (additionalCostSingleDay === 'Yes') {
      res.redirect('/lsf-public/v7/TDAE-placement-additional-daily-total')
  } else if (additionalCostSingleDay === 'No') {
      res.redirect('/lsf-public/v7/TDAE-placement-evidence-days')
  }

})

router.post('/v7/TDAE-no-evidence-reason', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-evidence-cya')

})

router.post('/v7/TDAE-no-evidence-decision', (req, res) => {

  const noEvidenceDecision = req.session.data['no-evidence-decision']

  if (noEvidenceDecision === 'remove') {
      res.redirect('/lsf-public/v7/TDAE-evidence-cya')
  } else if (noEvidenceDecision === 'reason') {
      res.redirect('/lsf-public/v7/TDAE-no-evidence-reason')
  }

  res.redirect('/lsf-public/v7/TDAE-no-evidence-decision')

})

router.post('/v7/TDAE-no-evidence-cost', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-no-evidence-decision')

})

router.post('/v7/TDAE-week-warning', (req, res) => {

  const weekWarning = req.session.data['week-warning']

  if (weekWarning === 'yes') {
      req.session.data['placement-week'] = "1"
  }

  res.redirect('/lsf-public/v7/TDAE-check-dates')

})

// Dates warning
router.post('/v7/TDAE-dates-warning', (req, res) => {

    const datesWarning = req.session.data['dates-warning']

    if (datesWarning === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-start-claim')
    } else {
        res.redirect('/lsf-public/v7/TDAE-check-dates')
    }

})

router.post('/v7/TDAE-accommodation-stays', (req, res) => {

  const separateBookings = req.session.data['stays']

  if (separateBookings === '2') {
      res.redirect('/lsf-public/v7/TDAE-accommodation-start-date')
  } else {
      res.redirect('/lsf-public/v7/TDAE-accommodation-same-start-date')
  }

})

router.post('/v7/TDAE-accommodation-same-start-date', (req, res) => {

  const sameStartDate = req.session.data['same-accommodation-start-date']

  if (sameStartDate === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-accommodation-same-end-date')
  } else {
      res.redirect('/lsf-public/v7/TDAE-accommodation-start-date')
  }

})

router.post('/v7/TDAE-accommodation-same-end-date', (req, res) => {

  const sameEndDate = req.session.data['same-accommodation-end-date']

  if (sameEndDate === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-accommodation-address')
  } else {
      res.redirect('/lsf-public/v7/TDAE-accommodation-end-date')
  }

})

router.post('/v7/TDAE-placement-week-days', (req, res) => {

  const oneAddress = req.session.data['one-address']

  if (oneAddress === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-placement-address-days')
  } else {
      res.redirect('/lsf-public/v7/TDAE-check-dates')
  }


})

// TDAE community mileage
router.post('/v7/TDAE-placement-community-mileage-cya', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-placement-itinerary')

})

router.post('/v7/TDAE-placement-same-start-date', (req, res) => {

  const sameDate = req.session.data['same-placement-start-date']

  if (sameDate === 'yes') {
      res.redirect('/lsf-public/v7/TDAE-placement-week-days')
  } else {
      res.redirect('/lsf-public/v7/TDAE-start-claim')
  }


})

// TDAE community mileage
router.post('/v7/TDAE-placement-community-mileage-costs', (req, res) => {

  const numberCommunityMiles = req.session.data['number-community-miles']

  if (numberCommunityMiles === '1') {
      req.session.data['number-community-miles'] = "2"
  } else {
      req.session.data['number-community-miles'] = "1"
  }
  res.redirect('/lsf-public/v7/TDAE-placement-community-mileage-cya')

})

// TDAE community mileage transport
router.post('/v7/TDAE-placement-community-mileage-transport', (req, res) => {

  const communityMileageTransport = req.session.data['community-mileage-transport']

  if (communityMileageTransport === 'Car journey') {
    res.redirect('/lsf-public/v7/TDAE-placement-community-mileage-costs')
  } else {
    res.redirect('/lsf-public/v7/TDAE-placement-community-mileage-costs-pt')
  }

})

// TDAE community mileage
router.post('/v7/TDAE-placement-community-mileage-day', (req, res) => {

  const claimingFor = req.session.data['claiming-for']

  if (claimingFor.includes('car') && claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v7/TDAE-placement-community-mileage-transport')
  } else {
    res.redirect('/lsf-public/v7/TDAE-placement-community-mileage-costs')
  }

})

// TDAE Evidence match
router.post('/v7/TDAE-evidence-match', (req, res) => {

  const evidenceNo = req.session.data['evidenceNumber']

  if (evidenceNo === '') {
    req.session.data['evidenceNumber'] = '2'
  }

  res.redirect('/lsf-public/v7/TDAE-evidence-cya')

})

// TDAE Evidence pause
router.post('/v7/TDAE-evidence-pause', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-placement-evidence')

})

// TDAE Evidence pause multiple
router.post('/v7/TDAE-evidence-pause-multiple', (req, res) => {

  const week1 = req.session.data['week-1']

  if (week1 === 'completed') {
    req.session.data['week'] = "2"
  } else {
    req.session.data['week'] = "1"
  }
  res.redirect('/lsf-public/v7/TDAE-evidence-pause')

})

// COSA confirmation
router.post('/v7/COSA-confirmation', (req, res) => {

  res.redirect('/lsf-public/v7/dashboard?questionnaire-completed=Completed&COSA=completed#tab-one')

})

// COSA declaration
router.post('/v7/COSA-declaration', (req, res) => {

      const cosaDeclaration = req.session.data['COSA-declaration']

      if (cosaDeclaration) {
          res.redirect('/lsf-public/v7/COSA-confirmation')
      } else {
          res.redirect('/lsf-public/v7/COSA-declaration')
      }

  })

// COSA confirm attendance
router.post('/v7/COSA-confirm-attendance', (req, res) => {

  res.redirect('/lsf-public/v7/COSA-declaration')

})

// Placement evidence
router.get('/v7/TDAE-placement-evidence', (req, res) => {

  const further = req.session.data['evidence-type']

  if (further === 'further') {
    res.redirect('/lsf-public/v7/TDAE-evidence-cya')
  } else {
    res.redirect('/lsf-public/v7/TDAE-evidence-match')
  }



})

// Placement evidence type
router.post('/v7/TDAE-placement-evidence-days', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-placement-additional-costs')

})

// Placement evidence type
router.post('/v7/TDAE-placement-additional-costs-cya', (req, res) => {

    req.session.data['additional-cost'] = "1"

  res.redirect('/lsf-public/v7/TDAE-placement-itinerary')

})


// Placement evidence type
router.post('/v7/TDAE-placement-evidence-type', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-placement-additional-cost-single-day')

})

// Placement journey days
router.get('/v7/TDAE-placement-journey-days', (req, res) => {

  const journeys = req.session.data['journey-mileage']

  if (journeys === '1') {
    req.session.data['journey-mileage'] = "2"
  } else if (journeys === '2') {
    req.session.data['journey-mileage'] = "3"
  } else {
  req.session.data['journey-mileage'] = "1"
  }

  res.redirect('/lsf-public/v7/TDAE-placement-journey-cya')

})

// Placement journey cya
router.post('/v7/TDAE-placement-journey-cya', (req, res) => {

  res.redirect('/lsf-public/v7/TDAE-placement-itinerary')

})

// Add journey mileage
router.get('/v7/add-journey-mileage', (req, res) => {

  req.session.data['new-journey'] = 'yes'
  res.redirect('/lsf-public/v7/TDAE-placement-to-mileage')

})

// Wrong costs
router.post('/v7/wrong-costs', (req, res) => {

    const change = req.session.data['costs-correct']

    if (change === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-task-list')
    } else {
        res.redirect('/lsf-public/v7/TDAE-returning-student/academic-year-details#tab-two')
    }

})

// Is this your final year?
router.post('/v7/TDAE-accommodation-comment', (req, res) => {

    const accommodationComment = req.session.data['accommodation-comment']
    const stays = req.session.data['stays']

    if (accommodationComment === 'no' && stays === '2') {
        res.redirect('/lsf-public/v7/TDAE-accommodation-next-stay')
    } else if (accommodationComment === 'no') {
        res.redirect('/lsf-public/v7/TDAE-accommodation-check')
    } else {
        res.redirect('/lsf-public/v7/TDAE-accommodation-add-comments')
    }

})

// Is this your final year?
router.post('/v7/TDAE-accommodation-next-stay', (req, res) => {

    const moreAccommodation = req.session.data['more-accommodation']

    if (moreAccommodation === 'yes') {
        req.session.data['accommodation-stays'] = '2'
        res.redirect('/lsf-public/v7/TDAE-accommodation-start-date')
    } else {
        res.redirect('/lsf-public/v7/TDAE-accommodation-check')
    }

})


// Is this your final year?
router.post('/v7/final-year', (req, res) => {

    const finalYear = req.session.data['final-year']

    if (finalYear === 'yes') {
        res.redirect('/lsf-public/v7/full-part-time')
    } else if (finalYear === 'no') {
        res.redirect('/lsf-public/v7/course-applying-for')
    } else {
        res.redirect('/lsf-public/v7/final-year')
    }

})

// Student declaration
router.post('/v7/student-declaration', (req, res) => {

    const studentDeclaration = req.session.data['student-declaration']

    req.session.data['student-approved'] = 'approved'

    if (studentDeclaration) {
        res.redirect('/lsf-public/v7/academic-year-details')
    } else {
        res.redirect('/lsf-public/v7/student-declaration')
    }

})

// ********************************
// DHSC QUESTIONNAIRE
// ********************************

// Is this your first year of application?
router.post('/v7/DHSC-first-year-application', (req, res) => {

    const firstYearApplication = req.session.data['first-year-application']

    if (firstYearApplication === "yes") {
        res.redirect('/lsf-public/v7/DHSC-aware-of-grant')
    } else {
        res.redirect('/lsf-public/v7/DHSC-confident-living-expenses')
    }

})

// Were you aware of the availability of a grant prior to applying for a Nursing, Midwifery or Allied Health professional?
router.post('/v7/DHSC-aware-of-grant', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    if (awareOfGrant === 'yes') {
        res.redirect('/lsf-public/v7/DHSC-elements')
    } else {
        res.redirect('/lsf-public/v7/DHSC-how-important-funding')
    }

})


// Which elements were you aware of?
router.post('/v7/DHSC-elements', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    res.redirect('/lsf-public/v7/DHSC-how-important-funding-study')

})

// How important was funding to your decision on where to study?
router.post('/v7/DHSC-how-important-funding', (req, res) => {

    res.redirect('/lsf-public/v7/DHSC-how-important-funding-study')

})

// How important was funding to your decision on what to study?
router.post('/v7/DHSC-how-important-funding-study', (req, res) => {

    res.redirect('/lsf-public/v7/DHSC-alternative-subjects')

})

// If you considered alternative subjects, please list them below
router.post('/v7/DHSC-alternative-subjects', (req, res) => {

    res.redirect('/lsf-public/v7/DHSC-training-grant')

})

// How will the Training Grant make a difference?
router.post('/v7/DHSC-training-grant', (req, res) => {

    res.redirect('/lsf-public/v7/DHSC-concerns-finish-course')

})

// If you have any other concerns that may affect your ability to complete the course, provide details here
router.post('/v7/DHSC-concerns-finish-course', (req, res) => {

    res.redirect('/lsf-public/v7/DHSC-which-grant-applying-for')

})

// How confident are you about being able to cover living expenses in the next year?
router.post('/v7/DHSC-confident-living-expenses', (req, res) => {

    const confidentLivingCost = req.session.data['confident-living-cost']

    res.redirect('/lsf-public/v7/DHSC-may-leave-course')

})

//Over the last year, did you ever feel that you may have to leave your course?
router.post('/v7/DHSC-may-leave-course', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    if (mayLeaveCourse === "yes") {
        res.redirect('/lsf-public/v7/DHSC-factors-involved')
    } else {
        res.redirect('/lsf-public/v7/DHSC-expect-complete-final-year')
    }

})

// What were the key factors involved?
router.post('/v7/DHSC-factors-involved', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    res.redirect('/lsf-public/v7/DHSC-expect-complete-final-year')

})

// Do you expect to complete your final year on time?
router.post('/v7/DHSC-expect-complete-final-year', (req, res) => {

    const completeFinalYear = req.session.data['complete-final-year']

    if (completeFinalYear === "yes") {
        res.redirect('/lsf-public/v7/DHSC-work-following-graduation')
    } else {
        res.redirect('/lsf-public/v7/DHSC-reason-extra-time')
    }

})

// What is the reason for taking extra time to complete your course?
router.post('/v7/DHSC-reason-extra-time', (req, res) => {

    const reasonExtraTime = req.session.data['extra-time']

    res.redirect('/lsf-public/v7/DHSC-work-following-graduation')

})

// Where do you intend to work following graduation?
router.post('/v7/DHSC-work-following-graduation', (req, res) => {

    // const workFollowingGraduation = req.session.data['work-following-graduation']

    res.redirect('/lsf-public/v7/DHSC-year-start-employment')

})

// What year do you intend to start employment?
router.post('/v7/DHSC-year-start-employment', (req, res) => {

    const yearStartEmployment = req.session.data['year-start-employment']

    res.redirect('/lsf-public/v7/DHSC-which-grant-applying-for')

})

// Which grant component are you applying for?
router.post('/v7/DHSC-which-grant-applying-for', (req, res) => {

    const whichGrant = req.session.data['grant']

    res.redirect('/lsf-public/v7/DHSC-submit-questionnaire')

})

// Questionnaire submitted
router.post('/v7/DHSC-submit-questionnaire', (req, res) => {

    req.session.data['questionnaire-completed'] = 'Completed'

    res.redirect('/lsf-public/v7/academic-year-details')

})

// ********************************
// Training Grant Application
// ********************************

// Have you applied for a student loan?
router.post('/v7/APPLY-applied-student-loan', (req, res) => {

    const studentLoan = req.session.data['student-loan']

    if (studentLoan === 'yes') {
        res.redirect('/lsf-public/v7/APPLY-bank-details')
    } else {
        res.redirect('/lsf-public/v7/APPLY-nationality')
    }

})

// What is your nationality?
router.post('/v7/APPLY-nationality', (req, res) => {

    const nationality = req.session.data['nationality']

    res.redirect('/lsf-public/v7/APPLY-residency')

})

// Add residency
router.post('/v7/APPLY-add-residency', (req, res) => {

    res.redirect('/lsf-public/v7/APPLY-residency')

})

// Please enter your bank details
router.post('/v7/APPLY-bank-details', (req, res) => {

    const accountHolder = req.session.data['account-holder']
    const sortCode = req.session.data['sort-code']
    const accountNumber = req.session.data['account-number']
    const buildingSocietyNumber = req.session.data['building-society-number']

    res.redirect('/lsf-public/v7/APPLY-submit-your-evidence')

})

// Upload your Student loan award letter
router.post('/v7/APPLY-upload-sl-award-letter', (req, res) => {

    req.session.data['evidence-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v7/APPLY-submit-your-evidence')

})

// Evidence required
router.post('/v7/APPLY-submit-your-evidence', (req, res) => {

    res.redirect('/lsf-public/v7/APPLY-training-grant-submitted')

})

// You have now completed your Training Grant application
router.post('/v7/APPLY-training-grant-submitted', (req, res) => {

    req.session.data['training-grant-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v7/academic-year-details')

})


// ********************************
// TDAE Claim
// ********************************


// Do you receive travel support from Disabled Students Allowance?
router.post('/v7/TDAE-dsa-help', (req, res) => {

    const dsaSupport = req.session.data['dsa-support']

    if (dsaSupport === 'yes') {
        req.session.data['TDAE-signpost'] = 'DSA'
        res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-dsa-signpost')
    } else {
        res.redirect('/lsf-public/v7/TDAE-incur-costs')
    }

})

router.post('/v7/TDAE-placement-journey-same-days', (req, res) => {

    const sameJourneyCosts = req.session.data['same-costs']

    if (sameJourneyCosts === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-incur-costs')
    } else {
        res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-not-same-journey-costs')
    }

})

router.post('/v7/TDAE-incur-cost', (req, res) => {

    // Date cost was incurred
    const incurDay = req.session.data['incur-cost-day']
    const incurMonth = req.session.data['incur-cost-month']
    const incurYear = req.session.data['incur-cost-year']

    const dateCostIncurred = incurDay + '/' + incurMonth + '/' + incurYear

    if (incurYear == '2022' || incurYear == '22') {
        res.redirect('/lsf-public/v7/TDAE-academic-year')
    } else {
        req.session.data['academic-year'] = 'no'
        res.redirect('/lsf-public/v7/TDAE-travel-accommodation')
    }

})

router.post('/v7/TDAE-academic-year', (req, res) => {

    const academicYear = req.session.data['academic-year']

    if (academicYear === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-travel-accommodation')
    } else {
        res.redirect('/lsf-public/v7/TDAE-incur-costs')
    }

})

router.post('/v7/TDAE-placement-address-days', (req, res) => {

    const addressDays = req.session.data['address-days']

    if (addressDays === '2') {
        res.redirect('/lsf-public/v7/TDAE-placement-address-days-cya')
    } else {
        req.session.data['address-days'] = '2'
        res.redirect('/lsf-public/v7/TDAE-placement-address-days')
    }

})

router.post('/v7/TDAE-placement-address-days-cya', (req, res) => {

  const claimingFor = req.session.data['claiming-for']

  if (claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v7/TDAE-public-transport-pause');
  } else {
    res.redirect('/lsf-public/v7/TDAE-placement-itinerary');
  }



})

router.post('/v7/TDAE-placement-address-cya', (req, res) => {

    const addAnother = req.session.data['add-another']
    const addressNumber = req.session.data['address-number']
    const reusedDetails = req.session.data['reused-details']

    if (addAnother === 'yes' && addressNumber === '1') {
        req.session.data['address-number'] = '2'
        res.redirect('/lsf-public/v7/TDAE-placement-address-more')
    } else if (addAnother === 'yes' && addressNumber === '2') {
        req.session.data['address-number'] = '3'
        res.redirect('/lsf-public/v7/TDAE-placement-address-more')
    } else if (addAnother === 'yes' && addressNumber === '3') {
        req.session.data['address-number'] = '4'
        res.redirect('/lsf-public/v7/TDAE-placement-address-more')
    } else {
      if (reusedDetails && reusedDetails.indexOf('term-time-address') !== -1) {
        req.session.data['term-building-name'] = "Stephenson House"
        req.session.data['term-address-line-1'] = "Stoddart St"
        req.session.data['term-address-line-2'] = "Shieldfield"
        req.session.data['term-address-town'] = "Newcastle upon Tyne"
        req.session.data['term-address-postcode'] = "NE2 1AW"
        res.redirect('/lsf-public/v7/TDAE-eligibility-cya')
      } else {
        res.redirect('/lsf-public/v7/TDAE-same-term-time-address')
      }
    }

})

router.post('/v7/TDAE-placement-address-multiple', (req, res) => {

    const multipleAddresses = req.session.data['one-address']

    if (multipleAddresses === 'yes') {
      req.session.data['address-number'] = '1'
      res.redirect('/lsf-public/v7/TDAE-placement-address-more')
    } else {
      req.session.data['address-number'] = '0'
      res.redirect('/lsf-public/v7/TDAE-placement-address')
    }

})

router.post('/v7/TDAE-travel-accommodation', (req, res) => {

    const claimingFor = req.session.data['claiming-for']
    const change = req.session.data['change']

    if (claimingFor.includes('overseas') || claimingFor.includes('taxi')) {
        res.redirect('/lsf-public/v7/TDAE-signpost/TDAE-alternative-journey-signpost')
    } else if (change == ('yes')) {
        res.redirect('/lsf-public/v7/TDAE-eligibility-cya')
    } else {
        res.redirect('/lsf-public/v7/TDAE-reuse-answers')
    }

})

router.post('/v7/TDAE-normal-transport', (req, res) => {

    const modeOfTransport = req.session.data['mode-of-transport']

    if (modeOfTransport.includes('drive')) {
        res.redirect('/lsf-public/v7/TDAE-normal-return-mileage')
    } else if (modeOfTransport.includes('cycle')){
        res.redirect('/lsf-public/v7/TDAE-normal-cycle-return-mileage')
    } else if (modeOfTransport.includes('public')){
        res.redirect('/lsf-public/v7/TDAE-normal-public-additional-costs-often')
    } else {
        res.redirect('/lsf-public/v7/TDAE-additional-costs-comments')
    }

})

router.post('/v7/TDAE-same-term-time-address', (req, res) => {

    const sameTermTimeAddress = req.session.data['same-term-address']

    if (sameTermTimeAddress === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-eligibility-cya')
    } else {
        res.redirect('/lsf-public/v7/TDAE-term-time-address')
    }

})

router.post('/v7/TDAE-term-time-address', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-eligibility-cya')

})

router.post('/v7/TDAE-blended-learning', (req, res) => {

      res.redirect('/lsf-public/v7/TDAE-eligibility-cya')


})

router.post('/v7/TDAE-normal-place-study', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-normal-transport')

})

router.post('/v7/TDAE-normal-return-mileage', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-normal-additional-costs-often')

})

router.post('/v7/TDAE-normal-cycle-return-mileage', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-normal-cycle-additional-costs-often')

})

router.post('/v7/TDAE-normal-additional-costs-often', (req, res) => {

    const normalOftenAdditionalCosts = req.session.data['normal-often-additional-costs'];
    const modeOfTransport = req.session.data['mode-of-transport'];

    if (normalOftenAdditionalCosts === 'no' && modeOfTransport.includes('cycle')) {
        res.redirect('/lsf-public/v7/TDAE-normal-cycle-return-mileage');
    } else if (normalOftenAdditionalCosts === 'no' && modeOfTransport.includes('public')) {
        res.redirect('/lsf-public/v7/TDAE-normal-public-additional-costs-often');
    } else if (normalOftenAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v7/TDAE-additional-costs-comments');
    } else {
        res.redirect('/lsf-public/v7/TDAE-additional-costs');
    }

});

router.post('/v7/TDAE-normal-cycle-additional-costs-often', (req, res) => {

    const normalOftenCycleAdditionalCosts = req.session.data['normal-cycle-often-additional-costs']
    const modeOfTransport = req.session.data['mode-of-transport']

    if (normalOftenCycleAdditionalCosts === 'no' && modeOfTransport.includes('public')) {
        res.redirect('/lsf-public/v7/TDAE-normal-public-additional-costs-often')
    } else if (normalOftenCycleAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v7/TDAE-additional-costs-comments')
    } else {
        res.redirect('/lsf-public/v7/TDAE-cycle-additional-costs')
    }

})

router.post('/v7/TDAE-normal-public-additional-costs-often', (req, res) => {

    const normalOftenPublicAdditionalCosts = req.session.data['normal-public-often-additional-costs']

    if (normalOftenPublicAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v7/TDAE-additional-costs-comments')
    } else {
        res.redirect('/lsf-public/v7/TDAE-public-additional-costs')
    }

})

router.post('/v7/TDAE-additional-costs', (req, res) => {

  const modeOfTransport = req.session.data['mode-of-transport']

  if (modeOfTransport.includes('cycle')) {
      res.redirect('/lsf-public/v7/TDAE-normal-cycle-return-mileage')
  } else if (modeOfTransport.includes('public')) {
      res.redirect('/lsf-public/v7/TDAE-normal-public-additional-costs-often')
  } else {
      res.redirect('/lsf-public/v7/TDAE-additional-costs-comments')
  }

})

router.post('/v7/TDAE-cycle-additional-costs', (req, res) => {

  const modeOfTransport = req.session.data['mode-of-transport']

  if (modeOfTransport.includes('public')) {
      res.redirect('/lsf-public/v7/TDAE-normal-public-additional-costs-often')
  } else {
      res.redirect('/lsf-public/v7/TDAE-additional-costs-comments')
  }

})

router.post('/v7/TDAE-public-additional-costs', (req, res) => {

      res.redirect('/lsf-public/v7/TDAE-additional-costs-comments')

})

router.post('/v7/TDAE-additional-costs-comments', (req, res) => {

    const provideComments = req.session.data['related-comments']

    if (provideComments === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-comments')
    } else {
        res.redirect('/lsf-public/v7/TDAE-normal-summary-cya')
    }


})

router.post('/v7/TDAE-comments', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-normal-summary-cya')

})

router.post('/v7/TDAE-placement-cya', (req, res) => {

    req.session.data['add-placement-travel'] = "completed"
    res.redirect('/lsf-public/v7/TDAE-task-list')

})

router.post('/v7/TDAE-accommodation-check', (req, res) => {

    req.session.data['accommodation-details'] = "completed"
    res.redirect('/lsf-public/v7/TDAE-task-list')

})

router.post('/v7/TDAE-normal-summary-cya', (req, res) => {

    req.session.data['university-details'] = "completed"
    res.redirect('/lsf-public/v7/TDAE-task-list')

})

router.post('/v7/TDAE-placement-to-mileage', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-placement-return-mileage')

})


router.post('/v7/TDAE-placement-return-mileage', (req, res) => {

  const newJourney = req.session.data['new-journey']
  const claimingFor = req.session.data['claiming-for']

  if (newJourney === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-placement-journey-days')
  } else {
    if (claimingFor.includes('Public transport')) {
      res.redirect('/lsf-public/v7/TDAE-public-transport-type');
    } else {
      res.redirect('/lsf-public/v7/TDAE-placement-itinerary');
    }
  }

})

router.post('/v7/TDAE-placement-additional-costs-often', (req, res) => {

    const oftenAdditionalCosts = req.session.data['often-additional-costs']

    if (oftenAdditionalCosts === 'no') {
        req.session.data['any-additional-costs'] = 'no'
        res.redirect('/lsf-public/v7/TDAE-placement-journey-cya')
    } else {
        req.session.data['any-additional-costs'] = 'yes'
        res.redirect('/lsf-public/v7/TDAE-placement-additional-costs')
    }

})

router.post('/v7/TDAE-placement-additional-costs', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-placement-additional-costs-cya')

})

router.post('/v7/TDAE-placement-additional-comments', (req, res) => {

    const placementAdditionalComments = req.session.data['placement-related-comments']

    if (placementAdditionalComments === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-placement-comments')
    } else {
        // req.session.data['travel-details'] = 'completed'
        res.redirect('/lsf-public/v7/TDAE-placement-cya')
    }

})

router.post('/v7/TDAE-placement-comments', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-placement-cya')

})

router.post('/v7/TDAE-placement-address', (req, res) => {
  const reusedDetails = req.session.data['reused-details'];

  if (reusedDetails && reusedDetails.indexOf('term-time-address') !== -1) {
    req.session.data['term-building-name'] = "Stephenson House";
    req.session.data['term-address-line-1'] = "Stoddart St";
    req.session.data['term-address-line-2'] = "Shieldfield";
    req.session.data['term-address-town'] = "Newcastle upon Tyne";
    req.session.data['term-address-postcode'] = "NE2 1AW";
    res.redirect('/lsf-public/v7/TDAE-eligibility-cya');
  } else {
    req.session.data['address-number'] = '1'
    res.redirect('/lsf-public/v7/TDAE-placement-address-cya');
  }
});


router.post('/v7/TDAE-start-claim', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-placement-week-days')

})

router.post('/v7/TDAE-end-claim', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-placement-days')

    // const startDateDay = req.session.data['start-claim-day']
    // const startDateMonth = req.session.data['start-claim-month']
    // const startDateYear = req.session.data['start-claim-year']
    // const startDate = startDateDay + '-' + startDateMonth + '-' + startDateYear

    // const endDateDay = req.session.data['end-claim-day']
    // const endDateMonth = req.session.data['end-claim-month']
    // const endDateYear = req.session.data['end-claim-year']
    // const endDate = endDateDay + '-' + endDateMonth + '-' + endDateYear

    // following a set start and end date to view the different journey between more than 1 week and under 1 week
    // 1 week or less: 17-04-2023 to 21-04-2023
    // 2 weeks: 17-04-2023 to 28-04-2023

    // if (startDate === '17-04-2023' && endDate === '21-04-2023') {
    //     res.redirect('/lsf-public/v7/TDAE-days-claiming')
    // } else if (startDate === '17-04-2023' && endDate === '28-04-2023'){
    //     req.session.data['TDAE-multiple-weeks'] = 'yes'
    //     res.redirect('/lsf-public/v7/TDAE-claiming-same-days')
    // } else {
    //     res.redirect('/lsf-public/v7/TDAE-end-claim')
    // }

})

router.post('/v7/TDAE-placement-days', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-check-dates')

})

router.post('/v7/TDAE-check-dates', (req, res) => {

  const claimingFor = req.session.data['claiming-for']

  if (claimingFor.includes('Public transport')){
    res.redirect('/lsf-public/v7/TDAE-public-transport-pause')
  } else {
    res.redirect('/lsf-public/v7/TDAE-same-journey')
  }

})

router.post('/v7/TDAE-same-journey', (req, res) => {

  const sameJourney = req.session.data['same-journey']
  const claimingFor = req.session.data['claiming-for']

  if (sameJourney === 'yes'){
    if (claimingFor.includes('car')){
      res.redirect('/lsf-public/v7/TDAE-placement-return-mileage')
    } else {
      res.redirect('/lsf-public/v7/TDAE-public-transport-type')
    }
  } else {
      res.redirect('/lsf-public/v7/TDAE-placement-itinerary')
  }

})

router.post('/v7/TDAE-claiming-same-days', (req, res) => {

    const claimingSameDays = req.session.data['claiming-same-days']

    if (claimingSameDays === 'yes'){
        res.redirect('/lsf-public/v7/TDAE-days-claiming')
    } else {
        res.redirect('/lsf-public/v7/TDAE-what-days-claiming-week')
    }

})

router.post('/v7/TDAE-what-days-claiming-week', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')

})

router.post('/v7/TDAE-what-days-claiming-week-2', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')

})

router.post('/v7/TDAE-what-days-claiming-week-cya', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-placement-return-mileage')

})

router.post('/v7/TDAE-days-claiming', (req, res) => {

    const anyAdditionalCosts = req.session.data['any-additional-costs']

    if (anyAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v7/TDAE-claim-date-evidence-cya')
    } else {
        res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')
    }

})

// New evidence journey
router.post('/v7/TDAE-evidence-mini-cya', (req, res) => {

    const moreEvidence = req.session.data['more-evidence']
    const claimingSameDays = req.session.data['claiming-same-days']
    const multipleWeeks = req.session.data['TDAE-multiple-weeks']

    if (moreEvidence === 'yes') {
        res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')
    } else {

        if (multipleWeeks === 'yes') {

            if (claimingSameDays === 'yes') {
                req.session.data['upload-week-2'] = 'yes'
                req.session.data['end-of-upload-2']= 'yes'
                res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')
            } else {
                req.session.data['upload-week-2'] = 'yes'
                req.session.data['end-of-upload-2'] = 'yes'
                res.redirect('/lsf-public/v7/TDAE-what-days-claiming-week-2')
            }

        } else {
            res.redirect('/lsf-public/v7/TDAE-claim-date-evidence-cya')
        }

    }

})

router.post('/v7/TDAE-evidence-mini-cya-complete', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-claim-date-evidence-cya')

})

router.post('/v7/TDAE-claim-date-evidence-cya', (req, res) => {

    req.session.data['add-travel-date-evidence'] = 'completed'

    res.redirect('/lsf-public/v7/TDAE-task-list')

})



router.post('/v7/TDAE-type-journey-evidence', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence')

})

router.post('/v7/TDAE-placement-journey-evidence', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-evidence-summary')

})

router.post('/v7/TDAE-add-evidence-week', (req, res) => {

    const addEvidenceWeek = req.session.data['more-evidence']

    req.session.data['more-evidence'] = 'added'
    res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')

})

router.post('/v7/TDAE-provide-journey-evidence', (req, res) => {

    const actionLink = req.session.data['action-required']

    if (actionLink === 'yes') {
        req.session.data['action-required'] = 'no'
        res.redirect('/lsf-public/v7/TDAE-returning-student/TDAE-task-list-actions?claiming-for=accommodation')
    } else {
        req.session.data['add-date-evidence'] = 'completed'
        res.redirect('/lsf-public/v7/TDAE-task-list')
    }

})

router.post('/v7/TDAE-student-declaration', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-claim-submitted')

})

router.post('/v7/TDAE-claim-submitted', (req, res) => {

    req.session.data['TDAE-claim'] = 'Submitted'
    res.redirect('/lsf-public/v7/TDAE-returning-student/TDAE-active-claims')

})

// **************************************
// TDAE Claim - Action Required on Claim
// **************************************

router.post('/v7/TDAE-action-link', (req, res) => {

    req.session.data['action-required'] = 'yes'
    res.redirect('/lsf-public/v7/TDAE-returning-student/TDAE-task-list-actions?claiming-for=accommodation&accommodation-details=action')

})

router.post('/v7/TDAE-delete-evidence', (req, res) => {

    const deleteEvidence = req.session.data['delete-evidence']

    if (deleteEvidence === 'yes') {
        req.session.data['evidence-deleted'] = 'yes'
        res.redirect('/lsf-public/v7/TDAE-evidence-week-cya')
    } else {
        res.redirect('/lsf-public/v7/TDAE-evidence-week-cya')
    }

})

router.post('/v7/TDAE-evidence-week-cya', (req, res) => {

    res.redirect('/lsf-public/v7/TDAE-evidence-section-cya')

})

router.post('/v7/TDAE-add-more-evidence', (req, res) => {

    req.session.data['add-more-evidence'] = 'yes'
    res.redirect('/lsf-public/v7/TDAE-provide-journey-evidence-2')

})

router.post('/v7/TDAE-more-evidence-added', (req, res) => {

    req.session.data['more-evidence-added'] = 'yes'
    res.redirect('/lsf-public/v7/TDAE-evidence-week-cya')

})

router.post('/v7/TDAE-evidence-section-cya', (req, res) => {

    req.session.data['action-required'] = 'no'
    res.redirect('/lsf-public/v7/TDAE-returning-student/TDAE-task-list-actions')

})

router.post('/v7/TDAE-accommodation-type', (req, res) => {

    const accommodationAction = req.session.data['accommodation-details']

    if (accommodationAction === 'action') {
        res.redirect('/lsf-public/v7/TDAE-accommodation-check')
    } else {
        res.redirect('/lsf-public/v7/TDAE-accommodation-same-cost')
    }

})

router.post('/v7/TDAE-accommodation-same-cost', (req, res) => {

        const accommodationAction = req.session.data['accommodation-same-cost']

        if (accommodationAction === 'Yes') {
            res.redirect('/lsf-public/v7/TDAE-accommodation-cost')
        } else {
          req.session.data['accommodation-different-cost-number'] = '1'
          res.redirect('/lsf-public/v7/TDAE-accommodation-cost-different')
        }

})

router.post('/v7/TDAE-accommodation-cost-different', (req, res) => {

        const accommodationDifferentCostNumber = req.session.data['accommodation-different-cost-number']

        if (accommodationDifferentCostNumber == '1') {
          req.session.data['accommodation-different-cost-number'] = '2'
          res.redirect('/lsf-public/v7/TDAE-accommodation-cost-different')
        } else {
            res.redirect('/lsf-public/v7/TDAE-accommodation-evidence')
        }

})

router.post('/v7/TDAE-evidence-comment', (req, res) => {

  const evidenceComments = req.session.data['evidence-comments']

  if (evidenceComments === 'yes') {
    res.redirect('/lsf-public/v7/TDAE-evidence-add-comment')
  } else {
    res.redirect('/lsf-public/v7/TDAE-evidence-pause-multiple')
  }

})


module.exports = router;
