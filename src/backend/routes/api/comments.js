const express = require('express');
const router = express.Router();
const commentController = require('../../controllers/commentsController');
const verifyJWT = require('../../middleware/verifyJWT');
const user = require('../../model/User')

router.route('/')
    .get(commentController.getAllCommentmsgs)
    .post(commentController.createNewCommentmsg)
    .delete(commentController.deleteCommentmsg);



module.exports = router;