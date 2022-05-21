const Router = require("koa-router");

const {createaccount,
  getaccount,
  getaccounts,
  deleteaccount, 
  updateaccount} = require('./accountAPI')