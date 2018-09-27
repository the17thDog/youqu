const mongoose = require('mongoose')

const news_Schema = new mongoose.Schema({ //新闻
    scenic_id: String,
    title: String,
    image: String
})

module.exports = news_Schema