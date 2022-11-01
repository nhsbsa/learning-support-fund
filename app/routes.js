// External dependencies
const express = require('express');
const router = express.Router();

// Add your routes here - above the module.exports line

// ================================
// Routes for LSF Portal
// ================================
router.use('/lsf-portal/v1', require('./views/lsf-portal/v1/_routes'));

// ================================
// Routes for LSF Public
// ================================

// ================================
// Routes for LSF Web
// ================================

module.exports = router;
