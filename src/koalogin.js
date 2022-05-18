const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');

const app = new Koa();
const router = new Router();

// Response to the World to the GET requests
router.get('/', async (ctx) => {
  ctx.body = 'Hello, World!\n';
});

// Response by name to the GET requests, :name is URL fragment/argument
router.get('/:name', async (ctx) => {
  ctx.body = `Hello, ${ctx.params.name}!\n`;
});

