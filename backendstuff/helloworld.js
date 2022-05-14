const koa = require("koa");
var mysql = require('koa-mysql');
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const { resolve } = require('path');
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");

var app = new koa();
const PORT = process.env.PORT || 3001;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

var db = mysql.createPool({ user: 'root', password: '', database: 'accounts', host: 'localhost' });

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

const router = new Router();



app.use(router.routes()).use(router.allowedMethods());
app.listen(PORT, function () {
    console.log("  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});