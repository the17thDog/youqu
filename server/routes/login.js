const mongoose = require('mongoose')
const users_Schema = require('../models/users')

let User = mongoose.model('User', users_Schema)

module.exports = async ctx => {
    ctx.response.type = 'text/plain'
    let { username, password } = ctx.request.body
    let isSuccess = new Promise((resolve, reject) => {
        User.findOne({ username }, (err, doc) => {
            if (err) reject(errusers_Schema)
            resolve(doc)
        })
    })

    try {
        let userInfo = await isSuccess  //数据库返回的用户信息
        if (userInfo) {  //若 userInfo 存在
            if (userInfo.password === password) {
                ctx.cookies.set('userInfo', JSON.stringify({
                    u_id: userInfo._id,
                    username: userInfo.username
                }), {
                    // domain: 'localhost:8080',
                    // path: '/home',
                    httpOnly: true,
                    maxAge: 60*60*1000
                })

                ctx.body = { "ok": true, "msg": "登陆成功!"}
            } else {
                ctx.body = { "ok": false, "msg": "您输入的密码错误!" }
            }
        } else {
            ctx.body = { "ok": false, "msg": "该用户名不存在!" }
        }
    } catch (error) {
        console.log(error)
    }
}