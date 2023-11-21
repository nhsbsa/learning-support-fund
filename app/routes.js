// External dependencies
const express = require('express');
const router = express.Router();

// Ministry of Justice Assets

// Add your routes here - above the module.exports line

// clear session data - link in footer
router.post('/clear-session-data/', (req, res) => {
    req.session.data = {}
    res.render('index')
})

// ================================
// Routes for LSF Portal
// ================================
router.use('/lsf-portal/v6', require('./views/lsf-portal/v6/_routes'));
router.use('/lsf-portal/v5', require('./views/lsf-portal/v5/_routes'));
router.use('/lsf-portal/v4', require('./views/lsf-portal/v4/_routes'));
router.use('/lsf-portal/v3', require('./views/lsf-portal/v3/_routes'));
router.use('/lsf-portal/v2', require('./views/lsf-portal/v2/_routes'));
router.use('/lsf-portal/v1', require('./views/lsf-portal/v1/_routes'));

// ================================
// Routes for LSF Public
// ================================
router.use('/lsf-public/v7', require('./views/lsf-public/v7/_routes'));
router.use('/lsf-public/v6', require('./views/lsf-public/v6/_routes'));
router.use('/lsf-public/v5', require('./views/lsf-public/v5/_routes'));
router.use('/lsf-public/v4', require('./views/lsf-public/v4/_routes'));
router.use('/lsf-public/v3', require('./views/lsf-public/v3/_routes'));
router.use('/lsf-public/v2', require('./views/lsf-public/v2/_routes'));
router.use('/lsf-public/v1', require('./views/lsf-public/v1/_routes'));

// ================================
// Routes for LSF Web
// ================================
router.use('/lsf-web/v5', require('./views/lsf-web/v5/_routes'));
router.use('/lsf-web/v4', require('./views/lsf-web/v4/_routes'));
router.use('/lsf-web/v3', require('./views/lsf-web/v3/_routes'));
router.use('/lsf-web/v2', require('./views/lsf-web/v2/_routes'));
router.use('/lsf-web/v1', require('./views/lsf-web/v1/_routes'));

module.exports = router;
