const UserModel = require('../models/users')

module.exports = async ctx => {
    ctx.response.type = 'text/plain'
    let { nickname, username, password } = ctx.request.body
    let isExistUsername = new Promise((resolve, reject) => {
        //检查用户名是否存在
        UserModel.findOne({ username }, (err, doc) => {
            if (err) reject(err)
            //若有 doc 不为 null 则数据库中已存在用户名
            resolve(doc)
        })
    })

    try {
        let isExist = await isExistUsername
        
        if (!isExist) {  //若不存在 username, 进行下一步操作
            let user = new UserModel({
                nickname,
                username,
                password
            })

            user.save()
            ctx.body = { "ok": true, "msg": "注册成功" }
        } else {
            ctx.body = { "ok": false, "msg": "用户名已存在" }
        }
    } catch (error) {
        console.log(error)
    }
    
}

