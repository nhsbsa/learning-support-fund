// ********************************
// LSF PUBLIC (v8)
// ********************************

// External dependencies
const e = require('express');
const express = require('express');
const session = require('express-session');
// const moment = require('moment');
const router = express.Router();

// Submit claim not all tasks completed

router.post('/v8/TDAE-tasks-not-completed', (req, res) => {

  const tasksNotCompleted = req.session.data['tasks-not-completed']

  if (tasksNotCompleted === 'change-details') {
      res.redirect('/lsf-public/v8/TDAE-task-list')
  }
  else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-over-six-months')
  }


})

// Submit claim over six months

router.post('/v8/TDAE-over-six-months', (req, res) => {

  const invalidCostsAll = req.session.data['submit-over-six-months']

  if (invalidCostsAll === 'change-details') {
      res.redirect('/lsf-public/v8/TDAE-task-list')
  }
  else if (invalidCostsAll === 'delete') {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-sure-delete')
  }
  else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-over-six-months-reason')
  }


})

// Registration National Insurance number

router.post('/v8/national-insurance-number-question', (req, res) => {

  const nationalInsuranceNumberQuestion = req.session.data['national-insurance-number-question']

  if (nationalInsuranceNumberQuestion === 'No'){
    res.redirect('/lsf-public/v8/national-insurance-number-reason')
  } else {
    res.redirect('/lsf-public/v8/national-insurance-number')
  }

})

// TDAE Overseas
router.post('/v8/TDAE-overseas/authorisation', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-overseas/which-costs')

})

router.post('/v8/TDAE-overseas/authorisation-evidence', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-overseas/overseas-evidence-mini-cya')

})

router.post('/v8/TDAE-overseas/which-costs', (req, res) => {

  const overseasCost = req.session.data['overseas-cost']

  req.session.data['evidence'] = 'removed';

  if (overseasCost.includes('insurance')){
    res.redirect('/lsf-public/v8/TDAE-overseas/insurance-cost')
  } else if (overseasCost.includes('medical-tests')){
    res.redirect('/lsf-public/v8/TDAE-overseas/medical-tests-cost')
  } else if (overseasCost.includes('vaccinations')){
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-cost')
  } else if (overseasCost.includes('visa-fees')){
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-taxi/travelling-to')
  }

})

router.post('/v8/TDAE-overseas/insurance-evidence-mini-cya', (req, res) => {

  const moreInsuranceEvidence = req.session.data['more-insurance-evidence']

  if (moreInsuranceEvidence === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/insurance-evidence')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/insurance-add-comment')
  }

})

router.post('/v8/TDAE-overseas/insurance-comment', (req, res) => {

  const insuranceCosts = req.session.data['insurance-comments']
  const overseasCost = req.session.data['overseas-cost']

  if (insuranceCosts === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/insurance-add-comment')
  } else if (overseasCost.includes('medical-tests')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/medical-tests-cost')
  } else if (overseasCost.includes('vaccinations')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-cost')
  } else if (overseasCost.includes('visa-fees')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/insurance-add-comment', (req, res) => {

  const overseasCost = req.session.data['overseas-cost']

  if (overseasCost.includes('medical-tests')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/medical-tests-cost')
  } else if (overseasCost.includes('vaccinations')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-cost')
  } else if (overseasCost.includes('visa-fees')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/medical-tests-evidence-mini-cya', (req, res) => {

  const moreMedicalTestsEvidence = req.session.data['more-medical-tests-evidence']

  if (moreMedicalTestsEvidence === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/medical-tests-evidence')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/medical-tests-add-comment')
  }

})

router.post('/v8/TDAE-overseas/medical-tests-comment', (req, res) => {

  const medicalTestsComments = req.session.data['medical-tests-comments']
  const overseasCost = req.session.data['overseas-cost']

  if (medicalTestsComments === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/medical-tests-add-comment')
  } else if (overseasCost.includes('vaccinations')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-cost')
  } else if (overseasCost.includes('visa-fees')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/medical-tests-add-comment', (req, res) => {

  const overseasCost = req.session.data['overseas-cost']

  if (overseasCost.includes('vaccinations')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-cost')
  } else if (overseasCost.includes('visa-fees')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/vaccinations-evidence-mini-cya', (req, res) => {

  const moreVaccinationsEvidence = req.session.data['more-vaccinations-evidence']

  if (moreVaccinationsEvidence === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-evidence')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-add-comment')
  }

})

router.post('/v8/TDAE-overseas/vaccinations-comment', (req, res) => {

  const vaccinationsComments = req.session.data['vaccinations-comments']
  const overseasCost = req.session.data['overseas-cost']

  if (vaccinationsComments === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/vaccinations-add-comment')
  } else if (overseasCost.includes('visa-fees')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/vaccinations-add-comment', (req, res) => {

  const overseasCost = req.session.data['overseas-cost']

  if (overseasCost.includes('visa-fees')) {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-cost')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/visa-fees-evidence-mini-cya', (req, res) => {

  const moreVisaFeesEvidence = req.session.data['more-visa-fees-evidence']

  if (moreVisaFeesEvidence === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-evidence')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-add-comment')
  }

})

router.post('/v8/TDAE-overseas/visa-fees-comment', (req, res) => {

  const visaFeesComments = req.session.data['visa-fees-comments']
  const overseasCost = req.session.data['overseas-cost']

  if (visaFeesComments === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-overseas/visa-fees-add-comment')
  } else {
    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')
  }

})

router.post('/v8/TDAE-overseas/visa-fees-add-comment', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-overseas/overseas-check')

})

// TDAE Taxis

router.post('/v8/travelling-from', (req, res) => {

  const travellingFrom = req.session.data['travelling-from']

  if (travellingFrom === 'new'){
    res.redirect('/lsf-public/v8/TDAE-taxi/travelling-from-address')
  } else {
    res.redirect('/lsf-public/v8/TDAE-taxi/travelling-to')
  }

})

router.post('/v8/travelling-to', (req, res) => {

  const travellingTo = req.session.data['travelling-to']

  if (travellingTo === 'new'){
    res.redirect('/lsf-public/v8/TDAE-taxi/travelling-to-address')
  } else {
    res.redirect('/lsf-public/v8/TDAE-taxi/cost')
  }

})

router.post('/v8/evidence', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-taxi/evidence-mini-cya')

})

router.post('/v8/evidence-mini-cya', (req, res) => {

  const moreEvidence = req.session.data['more-evidence']

  if (moreEvidence === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-taxi/evidence')
  } else {
    res.redirect('/lsf-public/v8/TDAE-taxi/check')
  }

})

router.post('/v8/comment', (req, res) => {

  const taxiComments = req.session.data['taxi-comments']

  if (taxiComments === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-taxi/add-comment')
  } else {
    res.redirect('/lsf-public/v8/TDAE-taxi/check')
  }

})

// ********************************

router.post('/v8/sign-in', (req, res) => {

  req.session.data['send-again'] = 'false';

  const testScenario = req.session.data['test-scenario']

  if (testScenario === 'true'){
    res.redirect('/lsf-public/v8/phone-number-check')
  } else {
    req.session.data['changed'] = 'false';
    res.redirect('/lsf-public/v8/sign-in-2fa')
  }

})

router.post('/v8/change-phone-number', (req, res) => {

  const signIn = req.session.data['sign-in']

  req.session.data['changed'] = 'true';

  if (signIn === 'yes'){
    res.redirect('/lsf-public/v8/sign-in-2fa')
  } else {
    res.redirect('/lsf-public/v8/change-phone-number-2fa')
  }

})

router.post('/v8/phone-number-check', (req, res) => {

  const numberCorrect = req.session.data['number-correct']

  if (numberCorrect === 'yes'){
    req.session.data['changed'] = 'false';
    res.redirect('/lsf-public/v8/sign-in-2fa')
  } else {
    req.session.data['sign-in'] = 'yes';
    res.redirect('/lsf-public/v8/change-phone-number')
  }

})

router.post('/v8/TDAE-accommodation-term-time-costs', (req, res) => {

  const accommodationCosts = req.session.data['accommodation-costs']

  if (accommodationCosts === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-accommodation-pause')
  } else {
    res.redirect('/lsf-public/v8/TDAE-accommodation-live-with-parents')
  }

})

router.post('/v8/TDAE-accommodation-live-with-parents', (req, res) => {

  const liveWithParents = req.session.data['live-with-parents']

  if (liveWithParents === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-accommodation-pause')
  } else {
    res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-accommodation-not-eligible')
  }

})

router.post('/v8/TDAE-accommodation-not-eligible', (req, res) => {

  const accommodationNotEligible = req.session.data['accommodation-not-eligible']

  if (accommodationNotEligible === 'change-answers') {
      res.redirect('/lsf-public/v8/TDAE-accommodation-term-time-costs')
  }  else if (accommodationNotEligible === 'remove') {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-accommodation-remove-all')
  } else if (accommodationNotEligible === 'delete') {
    res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-accommodation-delete')
  } else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-accommodation-not-eligible')
  }


})

router.post('/v8/TDAE-accommodation-remove-all', (req, res) => {

  const removeAll = req.session.data['remove']

  if (removeAll === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-task-list')
  } else {
    res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-accommodation-not-eligible')
  }

})

router.post('/v8/TDAE-accommodation-delete', (req, res) => {

  const deleteClaim = req.session.data['delete']

  if (deleteClaim === 'yes'){
    res.redirect('/lsf-public/v8/TDAE-returning-student/academic-year-details')
  } else {
    res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-accommodation-not-eligible')
  }

})

router.post('/v8/TDAE-accommodation-pause', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-accommodation-same-start-date')

})

router.post('/v8/TDAE-accommodation-journey', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-reuse-answers')

})

router.post('/v8/TDAE-tickets-already-claimed', (req, res) => {

  const ticketClaimed = req.session.data['ticket-already-claimed']

  if (ticketClaimed === 'yes continue'){
    res.redirect('/lsf-public/v8/TDAE-public-transport-overview')
  } else if (ticketClaimed === 'yes cancel'){
    res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-sure-delete')
  } else {
    res.redirect('/lsf-public/v8/TDAE-public-transport-days')
  }

})

// TDAE Task list

router.post('/v8/TDAE-placement-travel-evidence', (req, res) => {

  const placementWeek = req.session.data['placement-week']

  if (placementWeek === '2'){
    res.redirect('/lsf-public/v8/TDAE-evidence-pause-multiple')
  } else {
    res.redirect('/lsf-public/v8/TDAE-evidence-pause')
  }

})

// TDAE cycle mileage

router.post('/v8/TDAE-placement-cycle-same-mileage', (req, res) => {
  const claimingFor = req.session.data['claiming-for'];

  if (claimingFor.includes('Cycle') && claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v8/TDAE-public-transport-pause');
  } else {
    res.redirect('/lsf-public/8/TDAE-placement-itinerary');
  }
});

router.post('/v8/TDAE-placement-cycle-journey-cya', (req, res) => {

  const cycleJourney = req.session.data['cycle-journey']

  if (cycleJourney === '1'){
    req.session.data['cycle-journey'] = '2';
  } else if (cycleJourney != '1' || cycleJourney != '2') {
    req.session.data['cycle-journey'] = '1';
  }

    res.redirect('/lsf-public/v8/TDAE-placement-itinerary')

})

router.post('/v8/TDAE-placement-cycle-journey-days', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-cycle-to-mileage')

})

router.post('/v8/TDAE-placement-cycle-return-mileage', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-cycle-journey-cya')

})

router.post('/v8/TDAE-placement-cycle-to-mileage', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-cycle-return-mileage')

})

router.get('/v8/add-cycle-journey-mileage', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-cycle-mileage-address')

})

router.post('/v8/TDAE-sure-remove', (req, res) => {

  const remove = req.session.data['remove']

  if (remove === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-placement-cost-summary')
  } else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-invalid-costs-partial')
  }


})

router.post('/v8/TDAE-invalid-costs-partial', (req, res) => {

  const invalidCostsPartial = req.session.data['invalid-costs-partial']

  if (invalidCostsPartial === 'change-details') {
      res.redirect('/lsf-public/v8/TDAE-task-list')
  }  else if (invalidCostsPartial === 'remove') {
      res.redirect('/lsf-public/v8/TDAE-placement-cost-summary')
  } else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-invalid-costs-partial')
  }


})

router.post('/v8/TDAE-sure-delete', (req, res) => {

  const deleteClaim = req.session.data['delete']

  if (deleteClaim === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-deleted')
  } else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-invalid-costs-all')
  }


})

router.post('/v8/TDAE-sure-remove-all', (req, res) => {

  const removeAll = req.session.data['remove-all']

  if (removeAll === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-task-list')
  } else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-invalid-costs-all')
  }


})

router.post('/v8/TDAE-invalid-costs-all', (req, res) => {

  const invalidCostsAll = req.session.data['invalid-costs-all']

  if (invalidCostsAll === 'change-details') {
      res.redirect('/lsf-public/v8/TDAE-task-list')
  }
  else if (invalidCostsAll === 'remove-all') {
      res.redirect('/lsf-public/v8/TDAE-placement-cost-summary')
  }
  else if (invalidCostsAll === 'delete') {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-sure-delete')
  }
  else if (invalidCostsAll === 'save') {
      res.redirect('/lsf-public/v8/academic-year-details')
  }
  else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-invalid-costs-all')
  }


})

router.post('/v8/TDAE-costs-already-claimed', (req, res) => {

  const alreadyClaimed = req.session.data['already-claimed']

  if (alreadyClaimed === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-reuse-answers')
  } else {
      res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-costs-already-claimed')
  }


})

// TDAE public transport

router.post('/v8/TDAE-public-transport-pause', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-public-transport-type')

})

router.post('/v8/TDAE-public-transport-remove', (req, res) => {

  const publicTransportRemove = req.session.data['public-transport-remove']

  if (publicTransportRemove === 'Yes') {
    req.session.data['daily'] = 'no';
    req.session.data['multiple'] = 'no';
  }

  res.redirect('/lsf-public/v8/TDAE-public-transport-overview')

})

router.post('/v8/TDAE-public-transport-type', (req, res) => {
  // Check if req.session.data['public-transport-type'] is defined and convert to string
  if (req.session.data['public-transport-type']) {
    const transportTypeReplaceCommas = req.session.data['public-transport-type'].toString().replace(/,/g, '');

    req.session.data['public-transport-type'] = transportTypeReplaceCommas;
  }

  res.redirect('/lsf-public/v8/TDAE-public-transport-ticket');
});

router.post('/v8/TDAE-public-transport-ticket', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-public-transport-daily-cost')

})

router.post('/v8/TDAE-public-transport-daily-cost', (req, res) => {

  const publicTransportTicket = req.session.data['public-transport-ticket']

  if (publicTransportTicket === 'Daily') {
    req.session.data['daily'] = 'yes';
    res.redirect('/lsf-public/v8/TDAE-public-transport-repeated');
  } else {
    req.session.data['multiple'] = 'yes';
    res.redirect('/lsf-public/v8/TDAE-public-transport-dates');
  }

})

router.post('/v8/TDAE-public-transport-dates', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-ticket-already-claimed');

})

router.post('/v8/TDAE-public-transport-repeated', (req, res) => {

  const publicTransportRepeated = req.session.data['public-transport-repeated']

  if (publicTransportRepeated === 'Yes') {
    res.redirect('/lsf-public/v8/TDAE-public-transport-days')
  } else {
    res.redirect('/lsf-public/v8/TDAE-public-transport-day');
  }

})

router.post('/v8/TDAE-public-transport-days', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-public-transport-check')

})

router.post('/v8/TDAE-public-transport-check', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-public-transport-overview')

})

router.post('/v8/TDAE-public-transport-overview', (req, res) => {

  const publicTransportAddAnother = req.session.data['public-transport-add-another']

  if (publicTransportAddAnother === 'Yes') {
    res.redirect('/lsf-public/v8/TDAE-public-transport-type')
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
  }

})

// TDAE Reuse previous claim answers

router.post('/v8/TDAE-reuse-details', (req, res) => {

  const reusedDetails = req.session.data['reused-details']
  const claimReused = req.session.data['claim-reused']

  req.session.data['submit-claim'] = "incomplete"

  if (reusedDetails.indexOf('placement-address-1') === -1 && reusedDetails.indexOf('placement-address-2') === -1) {
    res.redirect('/lsf-public/v8/TDAE-placement-address')
  } else if (reusedDetails.indexOf('term-time-address') === -1) {
    req.session.data['address-number'] = "1"
    res.redirect('/lsf-public/v8/TDAE-same-term-time-address')
  } else {
    req.session.data['address-number'] = "1"
    req.session.data['term-building-name'] = "Stephenson House"
    req.session.data['term-address-line-1'] = "Stoddart St"
    req.session.data['term-address-line-2'] = "Shieldfield"
    req.session.data['term-address-town'] = "Newcastle upon Tyne"
    req.session.data['term-address-postcode'] = "NE2 1AW"
    if (claimReused === 'Alnwick') {
      req.session.data['placement-building-name'] = "Alnwick Hospital"
      req.session.data['placement-address-line-1'] = "Infirmary Drive"
      req.session.data['placement-address-town'] = "Alnwick"
      req.session.data['placement-address-postcode'] = "NE66 2NS"
    } else {
      req.session.data['placement-building-name'] = "Newcastle Hospital"
      req.session.data['placement-address-line-1'] = "Main Street"
      req.session.data['placement-address-town'] = "Newcastle upon Tyne"
      req.session.data['placement-address-postcode'] = "NE1 1AA"
    }
    if (reusedDetails.indexOf('university-travel-details') !== -1) {
        req.session.data['university-details'] = "reused";
    }
    res.redirect('/lsf-public/v8/TDAE-eligibility-cya')
  }

})

router.post('/v8/TDAE-reuse-claim', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-reuse-details')

})

router.post('/v8/TDAE-reuse-answers', (req, res) => {

  const reuseAnswers = req.session.data['reuse-answers']

  if (reuseAnswers === 'yes') {
    res.redirect('/lsf-public/v8/TDAE-reuse-claim')
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-address')
  }

})

// TDAE Hire car
router.post('/v8/TDAE-hire-car-pause', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-hire-car-cost')

})

router.post('/v8/TDAE-hire-car-cost', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-hire-car-dates')

})

router.post('/v8/TDAE-hire-car-dates', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-hire-car-authorisation')

})


router.post('/v8/TDAE-hire-car-authorisation', function (req, res) {

    res.redirect('/lsf-public/v8/TDAE-hire-car-reason')

})

router.post('/v8/TDAE-hire-car-reason', function (req, res) {

    res.redirect('/lsf-public/v8/TDAE-hire-car-add-comment')

})


router.post('/v8/TDAE-hire-car-evidence', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-hire-car-mini-cya')

})

router.post('/v8/TDAE-hire-car-mini-cya', (req, res) => {

  const moreEvidence = req.session.data['more-evidence']

  if (moreEvidence === 'yes') {
    res.redirect('/lsf-public/v8/TDAE-hire-car-evidence')
  } else {
    res.redirect('/lsf-public/v8/TDAE-hire-car-check')
  }

})

router.post('/v8/TDAE-hire-car-comment', (req, res) => {

  const hireCarComments = req.session.data['hire-car-comments']

  if (hireCarComments === 'yes') {
    res.redirect('/lsf-public/v8/TDAE-hire-car-add-comment')
  } else {
    res.redirect('/lsf-public/v8/TDAE-hire-car-check')
  }

})

router.post('/v8/TDAE-hire-car-add-comment', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-hire-car-evidence')

})

router.post('/v8/TDAE-hire-car-check', (req, res) => {

    req.session.data['hire-car'] = "completed"

    res.redirect('/lsf-public/v8/TDAE-hire-car-check-multiple')

})

router.post('/v8/TDAE-hire-car-check-multiple', (req, res) => {

    req.session.data['hire-car'] = "completed"

    res.redirect('/lsf-public/v8/TDAE-task-list')

})

router.post('/v8/TDAE-hire-car-remove-booking-1', (req, res) => {

  const removeBooking = req.session.data['remove-booking']

  if (removeBooking === 'yes') {
    res.redirect('/lsf-public/v8/TDAE-hire-car-check')
  } else {
    res.redirect('/lsf-public/v8/TDAE-hire-car-check')
  }

})

// TDAE Hire car ENDS


// TDAE Travel between Accommodation and Term time Address
router.post('/v8/TDAE-accommodation-journey-pause', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-direction-of-travel')

})

router.post('/v8/TDAE-accommodation-direction-of-travel', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-date-of-travel')

})

router.post('/v8/TDAE-accommodation-date-of-travel', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-address')

})

router.post('/v8/TDAE-accommodation-travel-address', (req, res) => {

  const accommodationAddress = req.session.data['accommodation-address']

  if (accommodationAddress === 'new-address') {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-new-address')
  } else {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-transport-method')
  }

})

router.post('/v8/TDAE-accommodation-travel-add-new-address', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-transport-method')

})

router.post('/v8/TDAE-accommodation-travel-transport-method', (req, res) => {

  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport' and/or 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  if (isCarSelected && isPublicTransportSelected && isCycleSelected) {
    // If 'car', 'public transport' and 'cycle' are all selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-car-journey-mileage');

  } else if (isCarSelected && isPublicTransportSelected) {
    // Both 'car' and 'public transport' are selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-car-journey-mileage');

  } else if (isCarSelected && isCycleSelected) {
      // Both 'car' and 'cycle' are selected
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-car-journey-mileage');

  } else if (isPublicTransportSelected && isCycleSelected) {
    // Both 'public transport' and 'cycle' are selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-method');

  } else if (isCarSelected) {
    // Only 'car' is selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-car-journey-mileage');
  } else if (isPublicTransportSelected) {
    // Only 'public transport' is selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-method');
  } else if (isCycleSelected) {
    // Only 'cycle' is selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-cycle-journey-mileage');
  }

});

router.post('/v8/TDAE-accommodation-travel-car-journey-mileage', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-extra-costs')

})

router.post('/v8/TDAE-accommodation-travel-extra-costs', (req, res) => {

  const didPayExtraCosts = req.session.data['extra-costs'];
  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport' and/or 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  if (didPayExtraCosts === 'no') {
    if (isCarSelected && isPublicTransportSelected && isCycleSelected) {
      // Redirect to public transport method page if 'car', 'public transport', and 'cycle' were all selected and no extra costs were paid
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-method');
    } else if (isCarSelected && isPublicTransportSelected) {
      // Redirect to public transport method page if 'car' and 'public transport' were selected and no extra costs were paid
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-method');
    } else if (isCarSelected && isCycleSelected) {
      // Redirect to cycle journey mileage if 'car' and 'cycle' were selected and no extra costs were paid
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-cycle-journey-mileage');
    } else if (isCarSelected) {
      // Redirect to additional comments page if only 'car' was selected and no extra costs were paid
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment');
    }

  } else if (didPayExtraCosts === 'yes') {
      if (isCarSelected && isPublicTransportSelected && isCycleSelected) {
        // Redirect to extra costs input page if 'car', 'public transport', and 'cycle' were all selected and user paid extra costs
        res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-extra-costs-input');
      } else if (isCarSelected && isPublicTransportSelected) {
        // Redirect to extra costs input page if 'car' and 'public transport' were selected and user paid extra costs
        res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-extra-costs-input');
      } else if (isCarSelected && isCycleSelected) {
        // Redirect to extra costs input page if 'car' and 'cycle' were selected and user paid extra costs
        res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-extra-costs-input');
      } else if (isCarSelected) {
        // Redirect to extra costs input if only 'car' was selected and user paid extra costs
        res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-extra-costs-input');
      }
  }
});


router.post('/v8/TDAE-accommodation-travel-extra-costs-input', (req, res) => {

  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport' or 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  if (isCarSelected) {
    if (isPublicTransportSelected && isCycleSelected) {
      // Redirect to public transport method page if 'car', 'public transport' and 'cycle' were selected
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-method');
    } else if (isPublicTransportSelected) {
      // Redirect to public transport method page if 'car' and 'public transport' were selected
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-method');
    } else if (isCycleSelected) {
      // Redirect to cycle journey mileage if 'car' and 'cycle' were selected
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-cycle-journey-mileage');
    } else {
      // Redirect to travel evidence page if only car was selected
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment');
    }
  }
});

router.post('/v8/TDAE-accommodation-travel-public-transport-method', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-public-transport-cost')

});

router.post('/v8/TDAE-accommodation-travel-public-transport-cost', (req, res) => {

  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport' and 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  if (isCarSelected && isPublicTransportSelected && isCycleSelected) {
      // Redirect to public transport method page if 'car', 'public transport' and 'cycle' were selected
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-cycle-journey-mileage');

  } else if (isCarSelected && isPublicTransportSelected) {
    // Redirect to travel evidence page if 'car' and 'public transport' were selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment');

  } else if (isPublicTransportSelected && isCycleSelected) {
    // Redirect to cycle journey mileage page if 'public transport' and 'cycle' were selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-cycle-journey-mileage');

  } else if (isPublicTransportSelected) {
    // Redirect to travel evidence page if only 'public transport' was selected
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment');
  }

});

router.post('/v8/TDAE-accommodation-travel-cycle-journey-mileage', (req, res) => {

  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport' and 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  // Check if the user had extra costs for driving
  const didPayExtraCosts = req.session.data['extra-costs'] === 'yes';

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment');

});


router.post('/v8/TDAE-accommodation-travel-evidence', (req, res) => {

  req.session.data['accommodation-travel-evidence'] = "added"

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-evidence-overview')

})

router.post('/v8/TDAE-accommodation-travel-mini-cya', (req, res) => {

  const moreEvidence = req.session.data['more-evidence']

  if (moreEvidence === 'yes') {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-evidence')
  } else {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check')
  }

})

router.post('/v8/TDAE-accommodation-travel-comment', (req, res) => {

  const additionalComments = req.session.data['accommodation-travel-comments']

  if (additionalComments === 'yes') {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment')
  } else {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check')
  }

})

router.post('/v8/TDAE-accommodation-travel-add-comment', (req, res) => {

  // Retrieve the transportMethods from the session data
  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport', and 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  // Check if the user had extra costs for driving
  const didPayExtraCosts = req.session.data['extra-costs'] === 'yes';

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check');

  //if (didPayExtraCosts || isPublicTransportSelected) {
  //  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-evidence');
  //} else {
  //  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check');
  //}

});

router.post('/v8/TDAE-accommodation-travel-check', (req, res) => {

  // Retrieve the transportMethods from the session data
  const transportMethods = req.session.data['transport-method'];

  // Check if the user previously selected 'car', 'public transport', and 'cycle' as transport methods
  const isCarSelected = transportMethods.includes('car');
  const isPublicTransportSelected = transportMethods.includes('public-transport');
  const isCycleSelected = transportMethods.includes('cycle');

  // Check if the user had extra costs for driving
  const didPayExtraCosts = req.session.data['extra-costs'] === 'yes';

  if (didPayExtraCosts || isPublicTransportSelected) {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-evidence-overview');
  } else {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check-multiple');
  }

  //res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check-multiple')

})

router.post('/v8/TDAE-accommodation-travel-check-multiple', (req, res) => {

  req.session.data['accommodation-travel'] = "completed"

  res.redirect('/lsf-public/v8/TDAE-task-list')

})

router.post('/v8/TDAE-accommodation-travel-remove-journey-1', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check')

})

router.post('/v8/TDAE-accommodation-travel-remove-journey-2', (req, res) => {

  res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-check')

})

// TDAE Travel between Accommodation and Term time Address ends



router.post('/v8/TDAE-placement-additional-cost-single-day', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-additional-costs')

})

router.post('/v8/TDAE-placement-additional-costs', (req, res) => {

  const additionalCostSingleDay = req.session.data['additional-cost-single-day']

  if (additionalCostSingleDay === 'Yes') {
      res.redirect('/lsf-public/v8/TDAE-placement-additional-daily-total')
  } else if (additionalCostSingleDay === 'No') {
      res.redirect('/lsf-public/v8/TDAE-placement-additional-cost-dates')
  }

})

router.post('/v8/TDAE-placement-additional-daily-total', (req, res) => {

  const repeatedCost = req.session.data['repeated-cost']

  if (repeatedCost === 'Yes') {
    res.redirect('/lsf-public/v8/TDAE-placement-evidence-day')
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-evidence-days')
  }

})

// Placement evidence type
router.post('/v8/TDAE-placement-evidence-days', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-additional-costs-cya')

})

// Placement evidence type
router.post('/v8/TDAE-placement-additional-costs-cya', (req, res) => {

    req.session.data['additional-cost'] = "1"

  res.redirect('/lsf-public/v8/TDAE-placement-itinerary')

})

router.post('/v8/TDAE-placement-mileage-address', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-journey-days')

})

router.post('/v8/TDAE-placement-cycle-mileage-address', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-cycle-journey-days')

})

router.post('/v8/TDAE-placement-additional-cost-dates', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-evidence-days')

})

router.post('/v8/TDAE-no-evidence-reason', (req, res) => {
  const claimingFor = req.session.data['claiming-for'];

  req.session.data['no-evidence'] = "true";

  if (claimingFor.includes('travel to accommodation')) {
    res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-travel-add-comment');
  } else {
    res.redirect('/lsf-public/v8/TDAE-evidence-cya');
  }
});

router.post('/v8/TDAE-no-evidence-decision', (req, res) => {

  const noEvidenceDecision = req.session.data['no-evidence-decision'];
  const claimingFor = req.session.data['claiming-for'];

  if (noEvidenceDecision === 'remove') {
    if (claimingFor.includes('travel to accommodation')) {
      res.redirect('/lsf-public/v8/accommodation-journey/TDAE-accommodation-journey-pause');
      return;
    } else {
      res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
      return;
    }
  } else if (noEvidenceDecision === 'reason') {
      res.redirect('/lsf-public/v8/TDAE-no-evidence-reason');
      return;
  };

});

router.post('/v8/TDAE-no-evidence-cost', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-no-evidence-decision')

})

router.post('/v8/TDAE-week-warning', (req, res) => {

  const weekWarning = req.session.data['week-warning']

  if (weekWarning === 'yes') {
      req.session.data['placement-week'] = "1"
  }

  res.redirect('/lsf-public/v8/TDAE-check-dates')

})

// Dates warning
router.post('/v8/TDAE-dates-warning', (req, res) => {

    const datesWarning = req.session.data['dates-warning']

    if (datesWarning === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-start-claim')
    } else {
        res.redirect('/lsf-public/v8/TDAE-check-dates')
    }

})

router.post('/v8/TDAE-accommodation-stays', (req, res) => {

  const separateBookings = req.session.data['stays']

  if (separateBookings === '2') {
      res.redirect('/lsf-public/v8/TDAE-accommodation-start-date')
  } else {
      res.redirect('/lsf-public/v8/TDAE-accommodation-same-start-date')
  }

})

router.post('/v8/TDAE-accommodation-previous-address', (req, res) => {

  const accommodationAddress = req.session.data['accommodation-address']

  if (accommodationAddress === 'new-address') {
      res.redirect('/lsf-public/v8/TDAE-accommodation-address')
  } else {
      res.redirect('/lsf-public/v8/TDAE-accommodation-type')
  }

})

router.post('/v8/TDAE-accommodation-same-start-date', (req, res) => {

  const sameStartDate = req.session.data['same-accommodation-start-date']

  if (sameStartDate === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-accommodation-same-end-date')
  } else {
      res.redirect('/lsf-public/v8/TDAE-accommodation-start-date')
  }

})

router.post('/v8/TDAE-accommodation-same-end-date', (req, res) => {

  const sameEndDate = req.session.data['same-accommodation-end-date']

  if (sameEndDate === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-accommodation-previous-address')
  } else {
      res.redirect('/lsf-public/v8/TDAE-accommodation-end-date')
  }

})

router.post('/v8/TDAE-placement-week-days', (req, res) => {

  const addressNumber = req.session.data['address-number']

  if (addressNumber == '2' || addressNumber == '3' || addressNumber == '4') {
      res.redirect('/lsf-public/v8/TDAE-placement-address-days')
  } else {
      res.redirect('/lsf-public/v8/TDAE-check-dates')
  }


})

// TDAE community mileage
router.post('/v8/TDAE-placement-community-mileage-cya', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-itinerary')

})

router.post('/v8/TDAE-placement-same-start-date', (req, res) => {

  const sameDate = req.session.data['same-placement-start-date']

  if (sameDate === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-placement-week-days')
  } else {
      res.redirect('/lsf-public/v8/TDAE-start-claim')
  }


})

// TDAE community mileage
router.post('/v8/TDAE-placement-community-mileage-costs', (req, res) => {

  const numberCommunityMiles = req.session.data['number-community-miles']

  if (numberCommunityMiles === '1') {
      req.session.data['number-community-miles'] = "2"
  } else {
      req.session.data['number-community-miles'] = "1"
  }
  res.redirect('/lsf-public/v8/TDAE-placement-community-mileage-cya')

})

// TDAE community mileage transport
router.post('/v8/TDAE-placement-community-mileage-transport', (req, res) => {

  const communityMileageTransport = req.session.data['community-mileage-transport']

  if (communityMileageTransport === 'Car journey') {
    res.redirect('/lsf-public/v8/TDAE-placement-community-mileage-costs')
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-community-mileage-costs-pt')
  }

})

// TDAE community mileage
router.post('/v8/TDAE-placement-community-mileage-day', (req, res) => {

  const claimingFor = req.session.data['claiming-for']

  if (claimingFor.includes('car') && claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v8/TDAE-placement-community-mileage-transport')
  } else if (claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v8/TDAE-placement-community-mileage-costs-pt')
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-community-mileage-costs')
  }



})

// TDAE Evidence match
router.post('/v8/TDAE-evidence-match', (req, res) => {

  const evidenceNo = req.session.data['evidenceNumber']

  if (evidenceNo === '') {
    req.session.data['evidenceNumber'] = '2'
  }

  res.redirect('/lsf-public/v8/TDAE-evidence-cya')

})

// TDAE Evidence pause
router.post('/v8/TDAE-evidence-pause', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-evidence')

})

// TDAE Evidence pause multiple
router.post('/v8/TDAE-evidence-pause-multiple', (req, res) => {

  const week1 = req.session.data['week-1']

  if (week1 === 'completed') {
    req.session.data['week'] = "2"
  } else {
    req.session.data['week'] = "1"
  }
  res.redirect('/lsf-public/v8/TDAE-evidence-pause')

})

// COSA confirmation
router.post('/v8/COSA-confirmation', (req, res) => {

  res.redirect('/lsf-public/v8/dashboard?questionnaire-completed=Completed&COSA=completed#tab-one')

})

// COSA declaration
router.post('/v8/COSA-declaration', (req, res) => {

      const cosaDeclaration = req.session.data['COSA-declaration']

      if (cosaDeclaration) {
          res.redirect('/lsf-public/v8/COSA-confirmation')
      } else {
          res.redirect('/lsf-public/v8/COSA-declaration')
      }

  })

  // COSA reason
  router.post('/v8/COSA-reason', (req, res) => {

    res.redirect('/lsf-public/v8/COSA-declaration')

  })

// COSA confirm attendance
router.post('/v8/COSA-confirm-attendance', (req, res) => {

  const cosaAttendance = req.session.data['COSA-attendance']

  if (cosaAttendance === 'no') {
    res.redirect('/lsf-public/v8/COSA-reason')
  } else {
    res.redirect('/lsf-public/v8/COSA-declaration')
  }

})

// Placement evidence
router.get('/v8/TDAE-placement-evidence', (req, res) => {

  const further = req.session.data['evidence-type']

  if (further === 'further') {
    res.redirect('/lsf-public/v8/TDAE-evidence-cya')
  } else {
    res.redirect('/lsf-public/v8/TDAE-evidence-match')
  }



})

// Placement evidence type
router.post('/v8/TDAE-placement-evidence-days', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-additional-costs-cya')

})

// Placement evidence type
router.post('/v8/TDAE-placement-additional-costs-cya', (req, res) => {

    req.session.data['additional-cost'] = "1"

  res.redirect('/lsf-public/v8/TDAE-placement-itinerary')

})


// Placement evidence type
router.post('/v8/TDAE-placement-evidence-type', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-additional-cost-single-day')

})

// Placement journey days
router.get('/v8/TDAE-placement-journey-days', (req, res) => {

  const journeys = req.session.data['journey-mileage']

  if (journeys === '1') {
    req.session.data['journey-mileage'] = "2"
  } else if (journeys === '2') {
    req.session.data['journey-mileage'] = "3"
  } else {
  req.session.data['journey-mileage'] = "1"
  }

  res.redirect('/lsf-public/v8/TDAE-placement-to-mileage')

})

// Placement journey cya
router.post('/v8/TDAE-placement-journey-cya', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-itinerary')

})

// Add journey mileage
router.get('/v8/add-journey-mileage', (req, res) => {

  req.session.data['new-journey'] = 'yes'
  res.redirect('/lsf-public/v8/TDAE-placement-mileage-address')

})

// Wrong costs
router.post('/v8/wrong-costs', (req, res) => {

    const change = req.session.data['costs-correct']

    if (change === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-task-list')
    } else {
        res.redirect('/lsf-public/v8/TDAE-returning-student/academic-year-details#tab-two')
    }

})

// Is this your final year?
router.post('/v8/TDAE-accommodation-comment', (req, res) => {

    const accommodationComment = req.session.data['accommodation-comment']
    const stays = req.session.data['stays']

    if (accommodationComment === 'no' && stays === '2') {
        res.redirect('/lsf-public/v8/TDAE-accommodation-next-stay')
    } else if (accommodationComment === 'no') {
        res.redirect('/lsf-public/v8/TDAE-accommodation-check')
    } else {
        res.redirect('/lsf-public/v8/TDAE-accommodation-add-comments')
    }

})

// Is this your final year?
router.post('/v8/TDAE-accommodation-next-stay', (req, res) => {

    const moreAccommodation = req.session.data['more-accommodation']

    if (moreAccommodation === 'yes') {
        req.session.data['accommodation-stays'] = '2'
        res.redirect('/lsf-public/v8/TDAE-accommodation-start-date')
    } else {
        res.redirect('/lsf-public/v8/TDAE-accommodation-check')
    }

})


// Is this your final year?
router.post('/v8/final-year', (req, res) => {

    const finalYear = req.session.data['final-year']

    if (finalYear === 'yes') {
        res.redirect('/lsf-public/v8/full-part-time')
    } else if (finalYear === 'no') {
        res.redirect('/lsf-public/v8/course-applying-for')
    } else {
        res.redirect('/lsf-public/v8/final-year')
    }

})

// Student declaration
router.post('/v8/student-declaration', (req, res) => {

    const studentDeclaration = req.session.data['student-declaration']

    req.session.data['student-approved'] = 'approved'

    if (studentDeclaration) {
        res.redirect('/lsf-public/v8/academic-year-details')
    } else {
        res.redirect('/lsf-public/v8/student-declaration')
    }

})

// ********************************
// DHSC QUESTIONNAIRE
// ********************************

// Is this your first year of application?
router.post('/v8/DHSC-first-year-application', (req, res) => {

    const firstYearApplication = req.session.data['first-year-application']

    if (firstYearApplication === "yes") {
        res.redirect('/lsf-public/v8/DHSC-aware-of-grant')
    } else {
        res.redirect('/lsf-public/v8/DHSC-confident-living-expenses')
    }

})

// Were you aware of the availability of a grant prior to applying for a Nursing, Midwifery or Allied Health professional?
router.post('/v8/DHSC-aware-of-grant', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    if (awareOfGrant === 'yes') {
        res.redirect('/lsf-public/v8/DHSC-elements')
    } else {
        res.redirect('/lsf-public/v8/DHSC-how-important-funding')
    }

})


// Which elements were you aware of?
router.post('/v8/DHSC-elements', (req, res) => {

    const awareOfGrant = req.session.data['aware-of-grant']

    res.redirect('/lsf-public/v8/DHSC-how-important-funding-study')

})

// How important was funding to your decision on where to study?
router.post('/v8/DHSC-how-important-funding', (req, res) => {

    res.redirect('/lsf-public/v8/DHSC-how-important-funding-study')

})

// How important was funding to your decision on what to study?
router.post('/v8/DHSC-how-important-funding-study', (req, res) => {

    res.redirect('/lsf-public/v8/DHSC-alternative-subjects')

})

// If you considered alternative subjects, please list them below
router.post('/v8/DHSC-alternative-subjects', (req, res) => {

    res.redirect('/lsf-public/v8/DHSC-training-grant')

})

// How will the Training Grant make a difference?
router.post('/v8/DHSC-training-grant', (req, res) => {

    res.redirect('/lsf-public/v8/DHSC-concerns-finish-course')

})

// If you have any other concerns that may affect your ability to complete the course, provide details here
router.post('/v8/DHSC-concerns-finish-course', (req, res) => {

    res.redirect('/lsf-public/v8/DHSC-which-grant-applying-for')

})

// How confident are you about being able to cover living expenses in the next year?
router.post('/v8/DHSC-confident-living-expenses', (req, res) => {

    const confidentLivingCost = req.session.data['confident-living-cost']

    res.redirect('/lsf-public/v8/DHSC-may-leave-course')

})

//Over the last year, did you ever feel that you may have to leave your course?
router.post('/v8/DHSC-may-leave-course', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    if (mayLeaveCourse === "yes") {
        res.redirect('/lsf-public/v8/DHSC-factors-involved')
    } else {
        res.redirect('/lsf-public/v8/DHSC-expect-complete-final-year')
    }

})

// What were the key factors involved?
router.post('/v8/DHSC-factors-involved', (req, res) => {

    const mayLeaveCourse = req.session.data['may-leave']

    res.redirect('/lsf-public/v8/DHSC-expect-complete-final-year')

})

// Do you expect to complete your final year on time?
router.post('/v8/DHSC-expect-complete-final-year', (req, res) => {

    const completeFinalYear = req.session.data['complete-final-year']

    if (completeFinalYear === "yes") {
        res.redirect('/lsf-public/v8/DHSC-work-following-graduation')
    } else {
        res.redirect('/lsf-public/v8/DHSC-reason-extra-time')
    }

})

// What is the reason for taking extra time to complete your course?
router.post('/v8/DHSC-reason-extra-time', (req, res) => {

    const reasonExtraTime = req.session.data['extra-time']

    res.redirect('/lsf-public/v8/DHSC-work-following-graduation')

})

// Where do you intend to work following graduation?
router.post('/v8/DHSC-work-following-graduation', (req, res) => {

    // const workFollowingGraduation = req.session.data['work-following-graduation']

    res.redirect('/lsf-public/v8/DHSC-year-start-employment')

})

// What year do you intend to start employment?
router.post('/v8/DHSC-year-start-employment', (req, res) => {

    const yearStartEmployment = req.session.data['year-start-employment']

    res.redirect('/lsf-public/v8/DHSC-which-grant-applying-for')

})

// Which grant component are you applying for?
router.post('/v8/DHSC-which-grant-applying-for', (req, res) => {

    const whichGrant = req.session.data['grant']

    res.redirect('/lsf-public/v8/DHSC-submit-questionnaire')

})

// Questionnaire submitted
router.post('/v8/DHSC-submit-questionnaire', (req, res) => {

    req.session.data['questionnaire-completed'] = 'Completed'

    res.redirect('/lsf-public/v8/academic-year-details')

})

// ********************************
// Training Grant Application
// ********************************

// Have you applied for a student loan?
router.post('/v8/APPLY-applied-student-loan', (req, res) => {

    const studentLoan = req.session.data['student-loan']

    if (studentLoan === 'yes') {
        // Removed Bank Details entry page from journey - now collected later after funding approval - Rob 28/8/24
        // res.redirect('/lsf-public/v8/APPLY-bank-details')
        res.redirect('/lsf-public/v8/APPLY-submit-your-evidence')
    } else {
        res.redirect('/lsf-public/v8/APPLY-nationality')
    }

})

// What is your nationality?
router.post('/v8/APPLY-nationality', (req, res) => {

    const nationality = req.session.data['nationality']

    res.redirect('/lsf-public/v8/APPLY-residency')

})

// Add residency
router.post('/v8/APPLY-add-residency', (req, res) => {

    res.redirect('/lsf-public/v8/APPLY-residency')

})


// Removed Bank Details entry page from journey - now collected later after funding approval - Rob 28/8/24
// Please enter your bank details
// router.post('/v8/APPLY-bank-details', (req, res) => {

//     const accountHolder = req.session.data['account-holder']
//     const sortCode = req.session.data['sort-code']
//     const accountNumber = req.session.data['account-number']
//     const buildingSocietyNumber = req.session.data['building-society-number']

//     res.redirect('/lsf-public/v8/APPLY-submit-your-evidence')

// })

// Upload your Student loan award letter
router.post('/v8/APPLY-upload-sl-award-letter', (req, res) => {

    req.session.data['evidence-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v8/APPLY-submit-your-evidence')

})

// Evidence required
router.post('/v8/APPLY-submit-your-evidence', (req, res) => {

    res.redirect('/lsf-public/v8/APPLY-training-grant-submitted')

})

// You have now completed your Training Grant application
router.post('/v8/APPLY-training-grant-submitted', (req, res) => {

    req.session.data['training-grant-submitted'] = 'Submitted'

    res.redirect('/lsf-public/v8/academic-year-details')

})


// ********************************
// TDAE Claim
// ********************************


// Do you receive travel support from Disabled Students Allowance?
router.post('/v8/TDAE-dsa-help', (req, res) => {

    const dsaSupport = req.session.data['dsa-support']

    if (dsaSupport === 'yes') {
        req.session.data['TDAE-signpost'] = 'DSA'
        res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-dsa-signpost')
    } else {
        res.redirect('/lsf-public/v8/TDAE-incur-costs')
    }

})

router.post('/v8/TDAE-placement-journey-same-days', (req, res) => {

    const sameJourneyCosts = req.session.data['same-costs']

    if (sameJourneyCosts === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-incur-costs')
    } else {
        res.redirect('/lsf-public/v8/TDAE-signpost/TDAE-not-same-journey-costs')
    }

})

router.post('/v8/TDAE-incur-cost', (req, res) => {

    // Date cost was incurred
    const incurDay = req.session.data['incur-cost-day']
    const incurMonth = req.session.data['incur-cost-month']
    const incurYear = req.session.data['incur-cost-year']

    const dateCostIncurred = incurDay + '/' + incurMonth + '/' + incurYear

    if (incurYear == '2022' || incurYear == '22') {
        res.redirect('/lsf-public/v8/TDAE-academic-year')
    } else {
        req.session.data['academic-year'] = 'no'
        res.redirect('/lsf-public/v8/TDAE-travel-accommodation')
    }

})

router.post('/v8/TDAE-academic-year', (req, res) => {

    const academicYear = req.session.data['academic-year']

    if (academicYear === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-travel-accommodation')
    } else {
        res.redirect('/lsf-public/v8/TDAE-incur-costs')
    }

})

router.post('/v8/TDAE-placement-address-days', (req, res) => {

    const addressDays = req.session.data['address-days']

    if (addressDays === '2') {
        res.redirect('/lsf-public/v8/TDAE-placement-address-days-cya')
    } else {
        req.session.data['address-days'] = '2'
        res.redirect('/lsf-public/v8/TDAE-placement-address-days')
    }

})

router.post('/v8/TDAE-placement-address-days-cya', (req, res) => {

  const claimingFor = req.session.data['claiming-for']

  if (claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v8/TDAE-public-transport-pause');
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
  }



})

router.post('/v8/TDAE-placement-address-cya', (req, res) => {

    const addAnother = req.session.data['add-another']
    const addressNumber = req.session.data['address-number']
    const reusedDetails = req.session.data['reused-details']
    const isInternational = req.session.data['international']
    const claimingFor = req.session.data['claiming-for']

    const onlyOverseasSelected = (claimingFor) => {
      return claimingFor.length === 1 && claimingFor.includes('overseas');
  };

    if (addAnother === 'yes' && addressNumber === '1') {
        req.session.data['address-number'] = '2'
        if (isInternational === 'true') {
          res.redirect('/lsf-public/v8/TDAE-international-placement-address-more');
        } else {
        res.redirect('/lsf-public/v8/TDAE-placement-address-more');
        }
    } else if (addAnother === 'yes' && addressNumber === '2') {
        req.session.data['address-number'] = '3'
        if (isInternational === 'true') {
          res.redirect('/lsf-public/v8/TDAE-international-placement-address-more');
        } else {
        res.redirect('/lsf-public/v8/TDAE-placement-address-more');
        }
    } else if (addAnother === 'yes' && addressNumber === '3') {
        req.session.data['address-number'] = '4'
        if (isInternational === 'true') {
          res.redirect('/lsf-public/v8/TDAE-international-placement-address-more');
        } else {
        res.redirect('/lsf-public/v8/TDAE-placement-address-more');
        }
    } else if (onlyOverseasSelected(claimingFor) && addAnother === 'no') {
      res.redirect('/lsf-public/v8/TDAE-eligibility-cya');
    } else {
      if (reusedDetails && reusedDetails.indexOf('term-time-address') !== -1) {
        req.session.data['term-building-name'] = "Stephenson House"
        req.session.data['term-address-line-1'] = "Stoddart St"
        req.session.data['term-address-line-2'] = "Shieldfield"
        req.session.data['term-address-town'] = "Newcastle upon Tyne"
        req.session.data['term-address-postcode'] = "NE2 1AW"
        res.redirect('/lsf-public/v8/TDAE-eligibility-cya')
      } else {
        res.redirect('/lsf-public/v8/TDAE-same-term-time-address')
      }
    }

})

router.post('/v8/TDAE-placement-address-multiple', (req, res) => {

    const multipleAddresses = req.session.data['one-address']

    if (multipleAddresses === 'yes') {
      req.session.data['address-number'] = '1'
      res.redirect('/lsf-public/v8/TDAE-placement-address-more')
    } else {
      req.session.data['address-number'] = '0'
      res.redirect('/lsf-public/v8/TDAE-placement-address')
    }

})

router.post('/v8/TDAE-travel-accommodation', (req, res) => {

    const claimingFor = req.session.data['claiming-for']
    const change = req.session.data['change']

    if (claimingFor.includes('overseas')) {
        res.redirect('/lsf-public/v8/TDAE-overseas-eligibility-pause')
    } else if (change == ('yes')) {
        res.redirect('/lsf-public/v8/TDAE-eligibility-cya')
    } else {
        res.redirect('/lsf-public/v8/TDAE-reuse-answers')
    }

})

router.post('/v8/TDAE-overseas-eligibility-pause', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-reuse-answers')

})

router.post('/v8/TDAE-normal-transport', (req, res) => {

    const modeOfTransport = req.session.data['mode-of-transport']

    if (modeOfTransport.includes('drive')) {
        res.redirect('/lsf-public/v8/TDAE-normal-return-mileage')
    } else if (modeOfTransport.includes('cycle')){
        res.redirect('/lsf-public/v8/TDAE-normal-cycle-return-mileage')
    } else if (modeOfTransport.includes('public')){
        res.redirect('/lsf-public/v8/TDAE-normal-public-additional-costs-often')
    } else {
        res.redirect('/lsf-public/v8/TDAE-comments')
    }

})

router.post('/v8/TDAE-same-term-time-address', (req, res) => {

    const sameTermTimeAddress = req.session.data['same-term-address']

    if (sameTermTimeAddress === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-eligibility-cya')
    } else {
        res.redirect('/lsf-public/v8/TDAE-term-time-address')
    }

})

router.post('/v8/TDAE-term-time-address', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-eligibility-cya')

})

router.post('/v8/TDAE-blended-learning', (req, res) => {

      res.redirect('/lsf-public/v8/TDAE-eligibility-cya')


})

router.post('/v8/TDAE-normal-place-study', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-normal-transport')

})

router.post('/v8/TDAE-normal-return-mileage', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-normal-additional-costs-often')

})

router.post('/v8/TDAE-normal-cycle-return-mileage', (req, res) => {

    const modeOfTransport = req.session.data['mode-of-transport']

    if (modeOfTransport.includes('public')) {
        res.redirect('/lsf-public/v8/TDAE-normal-public-additional-costs-often')
    } else {
        res.redirect('/lsf-public/v8/TDAE-comments')
    }

})

router.post('/v8/TDAE-normal-additional-costs-often', (req, res) => {

    const normalOftenAdditionalCosts = req.session.data['normal-often-additional-costs'];
    const modeOfTransport = req.session.data['mode-of-transport'];

    if (normalOftenAdditionalCosts === 'no' && modeOfTransport.includes('cycle')) {
        res.redirect('/lsf-public/v8/TDAE-normal-cycle-return-mileage');
    } else if (normalOftenAdditionalCosts === 'no' && modeOfTransport.includes('public')) {
        res.redirect('/lsf-public/v8/TDAE-normal-public-additional-costs-often');
    } else if (normalOftenAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v8/TDAE-comments');
    } else {
        res.redirect('/lsf-public/v8/TDAE-additional-costs');
    }

});

router.post('/v8/TDAE-normal-cycle-additional-costs-often', (req, res) => {

    const normalOftenCycleAdditionalCosts = req.session.data['normal-cycle-often-additional-costs']
    const modeOfTransport = req.session.data['mode-of-transport']

    if (normalOftenCycleAdditionalCosts === 'no' && modeOfTransport.includes('public')) {
        res.redirect('/lsf-public/v8/TDAE-normal-public-additional-costs-often')
    } else if (normalOftenCycleAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v8/TDAE-comments')
    } else {
        res.redirect('/lsf-public/v8/TDAE-cycle-additional-costs')
    }

})

router.post('/v8/TDAE-normal-public-additional-costs-often', (req, res) => {

    const normalOftenPublicAdditionalCosts = req.session.data['normal-public-often-additional-costs']

    if (normalOftenPublicAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v8/TDAE-comments')
    } else {
        res.redirect('/lsf-public/v8/TDAE-public-additional-costs')
    }

})

router.post('/v8/TDAE-additional-costs', (req, res) => {

  const modeOfTransport = req.session.data['mode-of-transport']

  if (modeOfTransport.includes('cycle')) {
      res.redirect('/lsf-public/v8/TDAE-normal-cycle-return-mileage')
  } else if (modeOfTransport.includes('public')) {
      res.redirect('/lsf-public/v8/TDAE-normal-public-additional-costs-often')
  } else {
      res.redirect('/lsf-public/v8/TDAE-comments')
  }

})

router.post('/v8/TDAE-cycle-additional-costs', (req, res) => {

  const modeOfTransport = req.session.data['mode-of-transport']

  if (modeOfTransport.includes('public')) {
      res.redirect('/lsf-public/v8/TDAE-normal-public-additional-costs-often')
  } else {
      res.redirect('/lsf-public/v8/TDAE-comments')
  }

})

router.post('/v8/TDAE-public-additional-costs', (req, res) => {

      res.redirect('/lsf-public/v8/TDAE-comments')

})

router.post('/v8/TDAE-additional-costs-comments', (req, res) => {

    const provideComments = req.session.data['related-comments']

    if (provideComments === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-comments')
    } else {
        res.redirect('/lsf-public/v8/TDAE-normal-summary-cya')
    }


})

router.post('/v8/TDAE-comments', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-normal-summary-cya')

})

router.post('/v8/TDAE-placement-cya', (req, res) => {

    req.session.data['add-placement-travel'] = "completed"
    res.redirect('/lsf-public/v8/TDAE-task-list')

})

router.post('/v8/TDAE-accommodation-check-multiple', (req, res) => {

    req.session.data['accommodation-details'] = "completed"
    res.redirect('/lsf-public/v8/TDAE-task-list')

})

router.post('/v8/TDAE-accommodation-check', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-accommodation-check-multiple')

})

router.post('/v8/TDAE-normal-summary-cya', (req, res) => {

    req.session.data['university-details'] = "completed"
    res.redirect('/lsf-public/v8/TDAE-task-list')

})

router.post('/v8/TDAE-placement-to-mileage', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-return-mileage')

})


router.post('/v8/TDAE-placement-return-mileage', (req, res) => {

  const newJourney = req.session.data['new-journey']
  const claimingFor = req.session.data['claiming-for']

  if (newJourney === 'yes') {
    res.redirect('/lsf-public/v8/TDAE-placement-journey-cya')
  } else {
    if (claimingFor.includes('Public transport')) {
      res.redirect('/lsf-public/v8/TDAE-public-transport-pause');
    } else {
      res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
    }
  }

})

router.post('/v8/TDAE-placement-additional-costs-often', (req, res) => {

    const oftenAdditionalCosts = req.session.data['often-additional-costs']

    if (oftenAdditionalCosts === 'no') {
        req.session.data['any-additional-costs'] = 'no'
        res.redirect('/lsf-public/v8/TDAE-placement-journey-cya')
    } else {
        req.session.data['any-additional-costs'] = 'yes'
        res.redirect('/lsf-public/v8/TDAE-placement-additional-costs')
    }

})

router.post('/v8/TDAE-placement-additional-costs', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-additional-cost-single-day')

})

router.post('/v8/TDAE-placement-additional-comments', (req, res) => {

    const placementAdditionalComments = req.session.data['placement-related-comments']

    if (placementAdditionalComments === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-placement-comments')
    } else {
        // req.session.data['travel-details'] = 'completed'
        res.redirect('/lsf-public/v8/TDAE-placement-cya')
    }

})

router.post('/v8/TDAE-placement-comments', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-cya')

})

router.post('/v8/TDAE-placement-address', (req, res) => {
  const reusedDetails = req.session.data['reused-details'];

  if (reusedDetails && reusedDetails.indexOf('term-time-address') !== -1) {
    req.session.data['term-building-name'] = "Stephenson House";
    req.session.data['term-address-line-1'] = "Stoddart St";
    req.session.data['term-address-line-2'] = "Shieldfield";
    req.session.data['term-address-town'] = "Newcastle upon Tyne";
    req.session.data['term-address-postcode'] = "NE2 1AW";
    res.redirect('/lsf-public/v8/TDAE-eligibility-cya');
  } else {
    req.session.data['address-number'] = '1'
    res.redirect('/lsf-public/v8/TDAE-placement-address-cya');
  }
});

router.post('/v8/TDAE-international-placement-address', (req, res) => {

  req.session.data['address-number'] = '1'
  res.redirect('/lsf-public/v8/TDAE-placement-address-cya')

})

router.post('/v8/TDAE-start-claim', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-week-days')

})

router.post('/v8/TDAE-end-claim', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-days')

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
    //     res.redirect('/lsf-public/v8/TDAE-days-claiming')
    // } else if (startDate === '17-04-2023' && endDate === '28-04-2023'){
    //     req.session.data['TDAE-multiple-weeks'] = 'yes'
    //     res.redirect('/lsf-public/v8/TDAE-claiming-same-days')
    // } else {
    //     res.redirect('/lsf-public/v8/TDAE-end-claim')
    // }

})

router.post('/v8/TDAE-placement-days', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-check-dates')

})

router.post('/v8/TDAE-check-dates', (req, res) => {

  const claimingFor = req.session.data['claiming-for']
  const addressNumber = req.session.data['address-number']

  if ((claimingFor.includes('car')) && (claimingFor.includes('Cycle'))){
    if (claimingFor.includes('Public transport')){
      res.redirect('/lsf-public/v8/TDAE-public-transport-pause')
    } else {
      res.redirect('/lsf-public/v8/TDAE-placement-itinerary')
    }
  } else if (addressNumber === '2' || addressNumber === '3' || addressNumber === '4') {
    res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
  } else if (claimingFor.includes('car')){
    res.redirect('/lsf-public/v8/TDAE-same-journey')
  } else if (claimingFor.includes('Cycle')){
    res.redirect('/lsf-public/v8/TDAE-same-journey')
  } else {
    res.redirect('/lsf-public/v8/TDAE-public-transport-pause')
  }

})

router.post('/v8/TDAE-same-journey', (req, res) => {
  const claimingFor = req.session.data['claiming-for'];
  const sameJourney = req.session.data['same-journey'];

  if (claimingFor.includes('car') && claimingFor.includes('Public transport')) {
    if (sameJourney === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-placement-car-same-mileage');
    } else {
      res.redirect('/lsf-public/v8/TDAE-public-transport-pause');
    }
  } else if (claimingFor.includes('Cycle') && claimingFor.includes('Public transport')) {
    if (sameJourney === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-placement-cycle-same-mileage');
    } else {
      res.redirect('/lsf-public/v8/TDAE-public-transport-pause');
    }
  } else if (claimingFor.includes('car')) {
    if (sameJourney === 'yes') {
      res.redirect('/lsf-public/v8/TDAE-placement-car-same-mileage');
    } else {
      res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
    }
  } else if (claimingFor.includes('Cycle')) {
      if (sameJourney === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-placement-cycle-same-mileage');
      } else {
        res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
      }
  }
});

router.post('/v8/TDAE-placement-car-same-mileage', (req, res) => {
  const claimingFor = req.session.data['claiming-for'];

  if (claimingFor.includes('car') && claimingFor.includes('Public transport')) {
    res.redirect('/lsf-public/v8/TDAE-public-transport-pause');
  } else {
    res.redirect('/lsf-public/v8/TDAE-placement-itinerary');
  }
});

router.post('/v8/TDAE-placement-car-to-mileage', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-car-return-mileage')

})

router.post('/v8/TDAE-placement-car-return-mileage', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-car-journey-cya')

})

router.post('/v8/TDAE-placement-car-journey-cya', (req, res) => {

  res.redirect('/lsf-public/v8/TDAE-placement-itinerary')

})

router.post('/v8/TDAE-claiming-same-days', (req, res) => {

    const claimingSameDays = req.session.data['claiming-same-days']

    if (claimingSameDays === 'yes'){
        res.redirect('/lsf-public/v8/TDAE-days-claiming')
    } else {
        res.redirect('/lsf-public/v8/TDAE-what-days-claiming-week')
    }

})

router.post('/v8/TDAE-what-days-claiming-week', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')

})

router.post('/v8/TDAE-what-days-claiming-week-2', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')

})

router.post('/v8/TDAE-what-days-claiming-week-cya', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-placement-return-mileage')

})

router.post('/v8/TDAE-days-claiming', (req, res) => {

    const anyAdditionalCosts = req.session.data['any-additional-costs']

    if (anyAdditionalCosts === 'no') {
        res.redirect('/lsf-public/v8/TDAE-claim-date-evidence-cya')
    } else {
        res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')
    }

})

// New evidence journey
router.post('/v8/TDAE-evidence-mini-cya', (req, res) => {

    const moreEvidence = req.session.data['more-evidence']
    const claimingSameDays = req.session.data['claiming-same-days']
    const multipleWeeks = req.session.data['TDAE-multiple-weeks']

    if (moreEvidence === 'yes') {
        res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')
    } else {

        if (multipleWeeks === 'yes') {

            if (claimingSameDays === 'yes') {
                req.session.data['upload-week-2'] = 'yes'
                req.session.data['end-of-upload-2']= 'yes'
                res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')
            } else {
                req.session.data['upload-week-2'] = 'yes'
                req.session.data['end-of-upload-2'] = 'yes'
                res.redirect('/lsf-public/v8/TDAE-what-days-claiming-week-2')
            }

        } else {
            res.redirect('/lsf-public/v8/TDAE-claim-date-evidence-cya')
        }

    }

})

router.post('/v8/TDAE-evidence-mini-cya-complete', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-claim-date-evidence-cya')

})

router.post('/v8/TDAE-claim-date-evidence-cya', (req, res) => {

    req.session.data['add-travel-date-evidence'] = 'completed'

    res.redirect('/lsf-public/v8/TDAE-task-list')

})



router.post('/v8/TDAE-type-journey-evidence', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence')

})

router.post('/v8/TDAE-placement-journey-evidence', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-evidence-summary')

})

router.post('/v8/TDAE-add-evidence-week', (req, res) => {

    const addEvidenceWeek = req.session.data['more-evidence']

    req.session.data['more-evidence'] = 'added'
    res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')

})

router.post('/v8/TDAE-provide-journey-evidence', (req, res) => {

    const actionLink = req.session.data['action-required']

    if (actionLink === 'yes') {
        req.session.data['action-required'] = 'no'
        res.redirect('/lsf-public/v8/TDAE-returning-student/TDAE-task-list-actions?claiming-for=accommodation')
    } else {
        req.session.data['add-date-evidence'] = 'completed'
        res.redirect('/lsf-public/v8/TDAE-task-list')
    }

})

router.post('/v8/TDAE-student-declaration', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-claim-submitted')

})

router.post('/v8/TDAE-claim-submitted', (req, res) => {

    req.session.data['TDAE-claim'] = 'Submitted'
    res.redirect('/lsf-public/v8/TDAE-returning-student/TDAE-active-claims')

})

// **************************************
// TDAE Claim - Action Required on Claim
// **************************************

router.post('/v8/TDAE-action-link', (req, res) => {

    req.session.data['action-required'] = 'yes'
    res.redirect('/lsf-public/v8/TDAE-returning-student/TDAE-task-list-actions?claiming-for=accommodation&accommodation-details=action')

})

router.post('/v8/TDAE-delete-evidence', (req, res) => {

    const deleteEvidence = req.session.data['delete-evidence']

    if (deleteEvidence === 'yes') {
        req.session.data['evidence-deleted'] = 'yes'
        res.redirect('/lsf-public/v8/TDAE-evidence-week-cya')
    } else {
        res.redirect('/lsf-public/v8/TDAE-evidence-week-cya')
    }

})

router.post('/v8/TDAE-evidence-week-cya', (req, res) => {

    res.redirect('/lsf-public/v8/TDAE-evidence-section-cya')

})

router.post('/v8/TDAE-add-more-evidence', (req, res) => {

    req.session.data['add-more-evidence'] = 'yes'
    res.redirect('/lsf-public/v8/TDAE-provide-journey-evidence-2')

})

router.post('/v8/TDAE-more-evidence-added', (req, res) => {

    req.session.data['more-evidence-added'] = 'yes'
    res.redirect('/lsf-public/v8/TDAE-evidence-week-cya')

})

router.post('/v8/TDAE-evidence-section-cya', (req, res) => {

    req.session.data['action-required'] = 'no'
    res.redirect('/lsf-public/v8/TDAE-returning-student/TDAE-task-list-actions')

})

router.post('/v8/TDAE-accommodation-type', (req, res) => {

    const accommodationAction = req.session.data['accommodation-details']

    if (accommodationAction === 'action') {
        res.redirect('/lsf-public/v8/TDAE-accommodation-check')
    } else {
        res.redirect('/lsf-public/v8/TDAE-accommodation-same-cost')
    }

})

router.post('/v8/TDAE-accommodation-same-cost', (req, res) => {

        const accommodationAction = req.session.data['accommodation-same-cost']

        if (accommodationAction === 'Yes') {
            res.redirect('/lsf-public/v8/TDAE-accommodation-cost')
        } else {
          req.session.data['accommodation-different-cost-number'] = '1'
          res.redirect('/lsf-public/v8/TDAE-accommodation-cost-different')
        }

})

router.post('/v8/TDAE-accommodation-cost-different', (req, res) => {

        const accommodationDifferentCostNumber = req.session.data['accommodation-different-cost-number']

        if (accommodationDifferentCostNumber == '1') {
          req.session.data['accommodation-different-cost-number'] = '2'
          res.redirect('/lsf-public/v8/TDAE-accommodation-cost-different')
        } else {
            res.redirect('/lsf-public/v8/TDAE-accommodation-add-comments')
        }

})

router.post('/v8/TDAE-add-comment', (req, res) => {

  const placementWeek = req.session.data['placement-week']

  if (placementWeek === '2'){
    res.redirect('/lsf-public/v8/TDAE-evidence-pause-multiple')
  } else {
    req.session.data['add-travel-date-evidence'] = 'completed'
    res.redirect('/lsf-public/v8/TDAE-task-list')
  }

})

router.post('/v8/TDAE-evidence-comment', (req, res) => {

  const evidenceComments = req.session.data['evidence-comments']
  const placementWeek = req.session.data['placement-week']

  if (evidenceComments === 'yes') {
    res.redirect('/lsf-public/v8/TDAE-evidence-add-comment')
  } else if (placementWeek === '2'){
    res.redirect('/lsf-public/v8/TDAE-evidence-pause-multiple')
  } else {
    req.session.data['add-travel-date-evidence'] = 'completed'
    res.redirect('/lsf-public/v8/TDAE-task-list')
  }

})


module.exports = router;
