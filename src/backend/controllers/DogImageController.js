const UploadFile = require("../middleware/HandleImageUpload");
const fs = require('fs');
const path = require('path');
const Upload = async (req, res) => {
  try {
    await UploadFile(req, res);
    if (req.file == undefined) {
      return res.status(400).send({ message: "You have not uploaded a image or your image is not in JPEG!!" });
    }
    res.status(200).send({
      message: "Uploaded image successfully! Name: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Error, could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};
const GetListFiles = (req, res) => {
  const baseUrl = "http://localhost:3000/img/";
  const directoryPath = "../img";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }
    let fileInfos = [];
    files.forEach((file) => {
      fileInfos.push({
        name: file,
        uri: baseUrl + file,
      });
    });
    res.status(200).send(fileInfos);
  });
};
const Download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath =  "../img/";
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
  Download
}
