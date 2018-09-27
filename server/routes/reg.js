const mongoose = require('mongoose')
const users_Schema = require('../models/users')

let User = mongoose.model('User', users_Schema)

module.exports = async ctx => {
    ctx.response.type = 'text/plain'
    let { nickname, username, password } = ctx.request.body
    let isExistUsername = new Promise((resolve, reject) => {
        //检查用户名是否存在
        User.findOne({ username }, (err, doc) => {
            if (err) reject(err)
            //若有 doc 不为 null 则数据库中已存在用户名
            resolve(doc)
        })
    })

    try {
        let isExist = await isExistUsername
        
        if (!isExist) {  //若不存在 username, 进行下一步操作

            let users = new User({
                nickname,
                username,
                password,
            })
            
            users.save()
            ctx.body = { "ok": true, "msg": "注册成功" }
        } else {
            ctx.body = { "ok": false, "msg": "用户名已存在" }
        }
    } catch (error) {
        console.log(error)
    }
    
}

