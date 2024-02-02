const Koa = require('koa')
const { koaBody } = require('koa-body')
const views = require('koa-views')
const path = require('path')
const app = new Koa()
const routes = require('./routes')

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

app.use(views(path.join(__dirname, 'views/'), { extension: 'html' }))

app.use(koaBody())

routes(app)

app.listen(3000)

console.log('start')
