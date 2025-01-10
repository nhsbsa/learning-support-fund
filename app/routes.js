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
// Version number variables
// ================================

// V9 Public
router.get('/lsf-public/v9/:page', (req, res) => {
    const number = 'v9';
    const templatePath = `lsf-public/v9/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

// V8 Public
router.get('/lsf-public/v8/:page', (req, res) => {
    const number = 'v8';
    const templatePath = `lsf-public/v8/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

// V7 Public
router.get('/lsf-public/v7/:page', (req, res) => {
    const number = 'v7';
    const templatePath = `lsf-public/v7/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

// V6 Public
router.get('/lsf-public/v6/:page', (req, res) => {
    const number = 'v6';
    const templatePath = `lsf-public/v6/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

// V5 Public
router.get('/lsf-public/v5/:page', (req, res) => {
    const number = 'v5';
    const templatePath = `lsf-public/v5/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

// V4 Public
router.get('/lsf-public/v4/:page', (req, res) => {
    const number = 'v4';
    const templatePath = `lsf-public/v4/${req.params.page}`;
    res.locals.number = number;
    res.render(templatePath, { number });
});

// ================================
// Routes for LSF Portal
// ================================
router.use('/lsf-portal/v9', require('./views/lsf-portal/v9/_routes'));
router.use('/lsf-portal/v8', require('./views/lsf-portal/v8/_routes'));
router.use('/lsf-portal/v7-demo', require('./views/lsf-portal/v7-demo/_routes'));
router.use('/lsf-portal/v7', require('./views/lsf-portal/v7/_routes'));
router.use('/lsf-portal/v6', require('./views/lsf-portal/v6/_routes'));
router.use('/lsf-portal/v5', require('./views/lsf-portal/v5/_routes'));
router.use('/lsf-portal/v4', require('./views/lsf-portal/v4/_routes'));
router.use('/lsf-portal/v3', require('./views/lsf-portal/v3/_routes'));
router.use('/lsf-portal/v2', require('./views/lsf-portal/v2/_routes'));
router.use('/lsf-portal/v1', require('./views/lsf-portal/v1/_routes'));

// ================================
// Routes for LSF Public
// ================================
router.use('/lsf-public/v9', require('./views/lsf-public/v9/_routes'));
router.use('/lsf-public/v8', require('./views/lsf-public/v8/_routes'));
router.use('/lsf-public/v7-demo', require('./views/lsf-public/v7-demo/_routes'));
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
router.use('/lsf-web/v5/admin-view', require('./views/lsf-web/v5/_routes'));
router.use('/lsf-web/v5', require('./views/lsf-web/v5/_routes'));
router.use('/lsf-web/v4', require('./views/lsf-web/v4/_routes'));
router.use('/lsf-web/v3', require('./views/lsf-web/v3/_routes'));
router.use('/lsf-web/v2', require('./views/lsf-web/v2/_routes'));
router.use('/lsf-web/v1', require('./views/lsf-web/v1/_routes'));

module.exports = router;
