const express = require("express");
const router = express.Router();
const controller = require("../../controllers/DogImageController");

 router.route('/')
  .post(controller.Upload)
 .get(controller.GetListFiles)

 router.route('/:name')
  .get(controller.Download);

module.exports = router;
