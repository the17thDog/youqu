const mongoose = require('mongoose')

const commits_Schema = new mongoose.Schema({ //评论
    content: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    score: Number,
    u_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    s_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Attraction'
    },
    like: {
        type: Number,
        default: 0
    }
})

module.exports = commits_Schema