// ********************************
// LSF PUBLIC (v9)
// ********************************

// External dependencies
const e = require('express');
const express = require('express');
const session = require('express-session');
// const moment = require('moment');
const router = express.Router();

// TDAE TIMESHEETS

router.post('/v9/sign-in', (req, res) => {

  req.session.data['send-again'] = 'false';

  const testScenario = req.session.data['test-scenario']

  if (testScenario === 'true'){
    res.redirect('/lsf-public/v10/phone-number-check')
  } else {
    req.session.data['changed'] = 'false';
    res.redirect('/lsf-public/v10/sign-in-2fa')
  }

})


module.exports = router;
