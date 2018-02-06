const Koa = require('koa2')
const fs = require('fs')
const koaBody = require('koa-body')
const Router = require('koa-router')
const loginFn = require('./routes/login')

const app = new Koa()
const router = new Router()

app.use(koaBody())
app
.use(router.routes())
.use(router.allowedMethods())

router.post('/reg', loginFn)

router.post('/login', ctx => {
    ctx.body = 'register'
})

// app.use(async ctx => {
//   console.log(ctx.request.body)
//   // let url = './www/' + ctx.url
//   // let data = await rFile(url)
//   // ctx.response.type = 'text/plain'
//   ctx.body = 111
// })

app.listen(3000)

// 读文件
// function rFile(url) {   
//   return new Promise((resolve, reject) => {
//     fs.readFile(url, (err, data) => {
//       if (err) {
//         reject(err)
//       }
//       resolve(data)
//     })
//   })
// }
