const mongoose = require('mongoose')

const attractions_Schema = new mongoose.Schema({
    name: String,
    id: String,
    praise: Number,
    assessment: Number,
    badReview: Number,
    pictrue: Array,
    summary: String
})

module.exports = attractions_Schema