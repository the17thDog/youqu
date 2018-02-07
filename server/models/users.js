const mongoose = require('mongoose')

let users_Schema = new mongoose.Schema({ //用户的数据模型
    nickname: String,
    username: String,
    password: String
})
let User = mongoose.model('User', users_Schema)

module.exports = User