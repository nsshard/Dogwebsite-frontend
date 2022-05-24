const express = require('express');
const router = express.Router();
const Controller = require('../../controllers/userinfoController');

router.get('/', Controller.DecodeJWT);

module.exports = router;