const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");

const app = new Koa();
const PORT = '3001';

app.use(BodyParser());
app.use(Logger());
app.use(cors());

app.listen(PORT, function () {
    console.log("  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});