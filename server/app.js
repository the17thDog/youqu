const Koa = require('koa2')
const koaBody = require('koa-body')
const Router = require('koa-router')
const mongoose = require('mongoose')
const fs = require('fs')
const {
    loginFn,
    regFn,
    home_infoFn,
    scenicFn,
    userinfoFn,
    logoutFn,
    addMsgFn,
    likeFn,
    adminFn,
    searchFn,
    commitFn
} = require ('./routes')

const app = new Koa()
const router = new Router()

app.use(koaBody())
app.use(router.routes()).use(router.allowedMethods())

//连接数据库
const db = mongoose.connect("mongodb://localhost:27017/Gouzi", err => {
    if (err) {
        console.log(err)
    } else {
        app.listen(3000)
    }
})

//路由配置
router.post('/reg', regFn)  //注册
router.post('/login', loginFn)  //登录
router.get('/logout', logoutFn)  //登出
router.get('/home_info', home_infoFn)  //获取所有景点
router.get('/scenic/:id', scenicFn)  //获取景点信息
router.get('/userinfo', userinfoFn)  //获取cookie存储的用户信息
router.post('/addMsg', addMsgFn)  //添加旅游分享
router.post('/like', likeFn)  //用户点赞
router.get('/admin', adminFn) //管理者获取用户数据
router.get('/search', searchFn) //搜索旅游景点
router.get('/commit', commitFn) //用户获取自己的旅游分享

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
