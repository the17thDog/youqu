const mongoose = require('mongoose')

const commits_Schema = new mongoose.Schema({ //评论
    content: {
        type: String,
        default: '没有评论'  
    },
    date: {
        type: Date,
        default: Date.now()
    },
    scenic: String,
    person: String,
    imgs: Array
})

module.exports = commits_Schema