const Router = require('@koa/router')
const generate = require('../generate')

const router = new Router()

router.post('/generate', async ctx => {
  const { dirName, params, fileName } = ctx.request.body
  try {
    await generate(dirName, params, fileName)
    ctx.body = { code: 200 }
  } catch (e) {
    ctx.body = { code: 500, msg: e }
  }
})

module.exports = router
