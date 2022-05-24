const {jwt_decode} = require('jwt-decode');
const User = require('../model/User');
var { expressjwt: jwt } = require("express-jwt");

function DecodeJWT (req, res) {
    
  jwt({ secret: "4868f80777e4c7a3c766e61bfb0c3cf163bfcd3a393cccfe159436e13fd6d825f20d62bafc54380889107d2d16ba31eb470363d74943ae384fc60895abc6d4bd", algorithms: ["HS256"] }),
  function (req, res) {
    res.sendStatus(200);
  }
};
//This script decodes JWT token and gives info for use in frontend

//below function outputs the username of the decoded token


module.exports = { DecodeJWT }