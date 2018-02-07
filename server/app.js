const Koa = require('koa2')
const koaBody = require('koa-body')
const Router = require('koa-router')
const mongoose = require('mongoose')
const fs = require('fs')
const loginFn = require('./routes/login')
const regFn = require('./routes/reg')

const app = new Koa()
const router = new Router()

app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())

//连接数据库
const db = mongoose.connect("mongodb://localhost:27017/Gouzi", err => {
    if (err) {
        console.log(err)
    }
})

//路由配置
router.post('/reg', regFn)
router.post('/login', loginFn)

app.listen(3000)

// app.use(async ctx => {
//   console.log(ctx.request.body)
//   // let url = './www/' + ctx.url
//   // let data = await rFile(url)
//   // ctx.response.type = 'text/plain'
//   ctx.body = 111
// })

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
