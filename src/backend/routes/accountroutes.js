const { response } = require("express");
const Router = require("koa-router");

const { createaccount,
  getaccount,
  getaccounts,
  deleteaccount,
  updateaccount
} = require('../dal/accountAPI');

const router = new Router({
  prefix:'/accounts'
})

router.get('/', async ctx=> {

  ctx.body= await getaccounts() ;
})

router.post('/', async ctx=>{

  let account = ctx.request.body;
  account = await createaccount(account);
  ctx.response.status = 200;
ctx.body = account;
})

router.get('/:id', async ctx=>{
  const id = ctx.params.id;
  ctx.body = await getaccount(id);
})

router.delete('/:id', async ctx=>{
  const id = ctx.params.id;
  await deleteaccount(id);
})

router.put('/:id', async ctx=>{
  const id = ctx.params.id;
  let account = ctx.request.body;
  account = await updateaccount(account);
  ctx.response.status = 200;
  ctx.body = account;
})

module.exports = router;