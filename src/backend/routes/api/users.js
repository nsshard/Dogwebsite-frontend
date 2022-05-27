const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
/**
 * VerifyJWT that prevents user manipulation
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
 * Routing functions
 * 
 */

router.route('/')
    .get(verifyJWT,usersController.getAllUsers)
    .delete(verifyJWT,usersController.deleteUser);

router.route('/:id')
    .get(usersController.getUser);

module.exports = router;