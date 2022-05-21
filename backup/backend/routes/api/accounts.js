const express = require('express');
const router = express.Router();
const accountsController = require('../../controllers/accountsController');

router.route('/')
    .get(accountsController.getAllAccounts)
    .post(accountsController.createNewAccount)
    .put(accountsController.updateAccount)
    .delete(accountsController.deleteAccount);

router.route('/:id')
    .get(accountsController.getAccount);

module.exports = router;