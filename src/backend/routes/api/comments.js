const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/commentsController');

const user = require('../../model/User')

/**
 * Requires person to be isAdmin to access certain requests
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
 * Deleting a comment is restricted for admin members
 * 
 */
router.route('/')
    .get(commentController.getAllCommentmsgs)
    .post(commentController.createNewCommentmsg)
    .delete(verifyJWT,commentController.deleteCommentmsg);



module.exports = router;