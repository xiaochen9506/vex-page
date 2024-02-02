const Router = require('@koa/router')
const generate = require('../generate')

const router = new Router()

router.post('/generate', async ctx => {
  const { dirName, params, fileName } = ctx.request.body
  generate(dirName, params, fileName)
    .then(() => {
      ctx.body = { code: 200 }
    })
    .catch(err => {
      ctx.body = { code: 500, msg: err }
    })
})

module.exports = router
