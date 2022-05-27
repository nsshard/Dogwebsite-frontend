const express = require('express');
const router = express.Router();
const dogsController = require('../../controllers/dogsController');
const user = require('../../model/User')
const passport = require('passport');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

/**
 * Verify the person's header cookie
 * 
 */

const verifyJWT = (req, res, next) => {
    console.log(req.headers);
    const token = req.headers["cookie"]
console.log(token);
    if (!token) {
        res.sendStatus(404);
    } else {
        var decoded = jwt_decode(token);
        console.log(decoded); {
        if (decoded.isAdmin != true) { 
            return res.sendStatus(409); 
            } else {
               
                next();
            }
        }
    }
};

/**
 * Routing stuff, calls the functions in the controllers. VerifyJWT is the above code that makes it impossible for unauthorized people to gain access to certain pages.
 * 
 */

router.route('/')
    .get(dogsController.getAllDogs)

    .post(verifyJWT,dogsController.createNewDog)



    .put(verifyJWT,dogsController.updateDog)
    .delete(verifyJWT,dogsController.deleteDog);

router.route('/dogid'+'/:id')
    .get(dogsController.getDogID);

    router.route('/dogname'+'/:name')
    .get(dogsController.getDogName);

    router.route('/dogbreed'+'/:breed')
    .get(dogsController.getDogBreed);

    router.route('/doglocation'+'/:location')
    .get(dogsController.getDogLocation);


module.exports = router;