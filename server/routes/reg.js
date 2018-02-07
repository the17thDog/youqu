const UserModel = require('../models/users')

module.exports = async ctx => {
    try {
        console.log(JSON.stringify(ctx.request.body))
        ctx.response.type = 'text/plain'
        let postMsg = ctx.request.body
        let isExist = await isExistUsername()
        
        if (!isExist) {  //若不存在 username, 进行下一步操作
            let user = new UserModel({
                nickname: postMsg.nickname,
                username: postMsg.username,
                password: postMsg.password
            })

            user.save()
            ctx.body = { "ok": true, "msg": "注册成功" }
        } else {
            ctx.body = { "ok": false, "msg": "用户名已存在" }
        }

        //检测用户名是否存在
        function isExistUsername() {
            return new Promise((resolve, reject) => {
                //检查用户名是否存在
                UserModel.findOne({ "nickname": postMsg.nickname }, (err, doc) => {
                    if (err) {
                        reject(err)
                    }
                    //若有 doc 不为 null 则数据库中已存在用户名
                    resolve(doc)
                })
            })
        }

    } catch (error) {
        console.log(error)
    }
}

