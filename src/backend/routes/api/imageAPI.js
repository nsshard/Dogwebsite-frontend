const express = require("express");
const router = express.Router();
const controller = require("../../controllers/DogImageController");
/**
 * Verify the JWT, make it so isAdmin tag is required.
 * 
 */
const verifyJWT = (req, res, next) => {
  console.log(req.headers);
  const token = req.headers["cookie"]
console.log(token);
  if (!token) {
      res.send("No token");
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
 * Routing stuff. One has VerifyJWT to make uploading require authorization (isAdmin)
 * 
 */
 router.route('/')
  .post(verifyJWT,controller.Upload)
 .get(controller.GetListFiles);

 router.route('/:name')
  .get(controller.Download);

module.exports = router;
