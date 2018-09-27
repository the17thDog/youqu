const mongoose = require('mongoose')

const users_Schema = new mongoose.Schema({ //用户的数据模型
    nickname: String,
    username: String,
    password: String,
    userpic: {
        type: String,
        default: '../../static/user.jpg'
    },
    
    isAdmin: {
        type: Boolean,
        default: false
    },
    likeList: {
        type: Array,
        default: []
    }
})


module.exports = users_Schema
