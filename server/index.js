const Koa = require('koa')
const { koaBody } = require('koa-body')

const app = new Koa()

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
app.use(ctx => {
  console.log(ctx.request.body)
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`
})


app.listen(3000)

console.log('start')
