const Koa = require('koa')
const { koaBody } = require('koa-body')
const Router = require('@koa/router')

const app = new Koa()
const router = new Router()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  if (ctx.method === 'OPTIONS') {
    ctx.body = 200
  } else {
    await next()
  }
})

app.use(koaBody())

app.use(async (ctx, next) => {
  try {
    ctx.body = ctx.request.body
  } catch (e) {
    ctx.body = {}
  }

  await next()
})


router.post('/pull', ctx => {
  ctx.body = 'ok'
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)

console.log('start')
