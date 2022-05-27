const express = require('express');
const router = express.Router();
const logoutController = require('../../controllers/logoutController');

/**
 * Routes the logout function
 * 
 */
router.get('/', logoutController.DeleteCookie);

module.exports = router;