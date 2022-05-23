const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/dogsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const verifyJWT = require('../../middleware/verifyJWT');
const user = require('../../model/User')
var jwt = require('jwt-simple');
const ACCESS_TOKEN_SECRET = '4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd'
const REFRESH_TOKEN_SECRET = '20e2bb4414c14e3da72a0323b13e9e2f60f5f17e33e299d09539be1639d16f11e9c142f3472d7ea34ec7946e860402d6ac601239a4461c1f19d522940dea3b9f'


router.route('/')
    .get(dogsController.getAllDogs)
    .post(dogsController.createNewDog)
    .put(dogsController.updateDog)
    .delete(dogsController.deleteDog);

router.route('/:id')
    .get(dogsController.getDog);

module.exports = router;