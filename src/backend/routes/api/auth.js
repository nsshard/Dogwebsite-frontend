const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
/**
 * Handles login, this serves as a router.
 * 
 */
router.post('/', authController.handleLogin);

module.exports = router;