const Koa = require('koa2')
const koaBody = require('koa-body');

const app = new Koa()
app.use(koaBody())

app.use(async ctx => {
    console.log(JSON.stringify(ctx.request.body))
    ctx.response.type = 'text/plain'
    ctx.body = 'ok'
})

app.listen(3000)