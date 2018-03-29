const mongoose = require('mongoose')
const commits_Schema = require('./commits')

const users_Schema = new mongoose.Schema({ //用户的数据模型
    nickname: String,
    username: String,
    password: String,
    commit: [commits_Schema]
})


module.exports = users_Schema
