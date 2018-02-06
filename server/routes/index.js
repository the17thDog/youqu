const Koa = require('koa2')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

app.use(router.routes())
    .use(router.allowedMethods());

// router.post('/login', loginFn)

module.exports = router