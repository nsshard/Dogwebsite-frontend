const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/registerController');
/**
 * Routes register function
 * 
 */
router.post('/', registerController.handleNewUser);

module.exports = router;