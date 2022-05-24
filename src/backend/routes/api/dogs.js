const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/dogsController');
const verifyJWT = require('../../middleware/verifyJWT');
const user = require('../../model/User')

router.route('/')
    .get(dogsController.getAllDogs)
    .post(dogsController.createNewDog)
    .put(dogsController.updateDog)
    .delete(dogsController.deleteDog);

router.route('/:id')
    .get(dogsController.getDog);

module.exports = router;