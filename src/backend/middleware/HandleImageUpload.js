const util = require("util");
const multer = require("multer");
const fs = require("fs");
/**
 * Handles image uploads. Mime types is what formats are supported.
 * 
 */
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  
};

/**
 * Limit image size
 * 
 */

const maxSize = 2 * 1024 * 1024;
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../img/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

/**
 * Using multer to store the image into the src img folder.
 * 
 */
let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");
let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
