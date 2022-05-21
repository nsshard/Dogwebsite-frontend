const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/dogsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(dogsController.getAllDogs)
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), dogsController.createNewDog)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), dogsController.updateDog)
    .delete(verifyRoles(ROLES_LIST.Admin), dogsController.deleteDog);

router.route('/:id')
    .get(dogsController.getDog);

module.exports = router;