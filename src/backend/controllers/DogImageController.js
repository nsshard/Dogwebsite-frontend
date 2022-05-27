const UploadFile = require("../middleware/HandleImageUpload");
const fs = require('fs');
const path = require('path');
/**
 * Handles the image uploading for dog pics
 * 
 */
const Upload = async (req, res) => {
  try {
    await UploadFile(req, res);
    
    if (req.file == undefined) {
/**
 * If the user did not upload a file or lacks file
 * 
 */
      return res.status(400).send({ message: "You have not uploaded a image or your image is not in JPEG!!" });
    }
/**
 * Successful upload
 * 
 */
    res.status(200).send({
      message: "Uploaded image successfully! Name: " + req.file.originalname,
    });
  } catch (err) {
 /**
 * Display error if the user couldnt upload the file for whatever reason
 * 
 */
    res.status(500).send({
      message: `Error, could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
const GetListFiles = (req, res) => {
 /**
 * Below is the image endpoint that images will be uploaded to
 * 
 */
  const baseUrl = "http://localhost:3000/img/";
  const directoryPath = "../img";
  /**
 * Find directory
 * 
 */
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
/**
 * Add file name as well as the link and file name so it can be easily retrieved
 * 
 */
        name: file,
        uri: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};
/**
 * Download images, so it can be displayed in dog browsers
 * 
 */
const Download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath =  "../img/";
  /**
 * Download from img folder
 * 
 */
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};



module.exports = {
  Upload,
  GetListFiles,
  Download,
};