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



module.exports = router;




