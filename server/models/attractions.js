const mongoose = require('mongoose')
const commits_Schema = require('./commits')

const attractions_Schema = new mongoose.Schema({
    name: String,
    parise: Number,
    assessment: Number,
    badReview: Number,
    info: String,
    pictrue: Array,
    price: Number,
    openTime: String,
    commit: commits_Schema
})