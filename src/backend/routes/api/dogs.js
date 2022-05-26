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

router.route('/dogid'+'/:id')
    .get(dogsController.getDogID);

    router.route('/dogname'+'/:name')
    .get(dogsController.getDogName);

    router.route('/dogbreed'+'/:breed')
    .get(dogsController.getDogBreed);

    router.route('/doglocation'+'/:location')
    .get(dogsController.getDogLocation);

module.exports = router;