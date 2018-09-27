const mongoose = require('mongoose')
const attractions_Schema = require('../models/attractions')
const news_Schema = require('../models/news')
const commits_Schema = require('../models/commits')
const user_Schema = require('../models/users')

const attraction_model = mongoose.model('Attraction', attractions_Schema)
const news_model = mongoose.model('News', news_Schema)
const commit_model = mongoose.model('Commit', commits_Schema)
const user_model = mongoose.model('User', user_Schema)

module.exports = async ctx => {
    const { id } = ctx.params
    const pNews = new Promise((resolve, reject) => {
        news_model.find({}, (err, doc) => {
            if (err) reject(err)
            resolve(doc)
        })
    })
    const getUserInfo = _id => {
        return new Promise((resolve, reject) => {
            user_model.findOne({ _id }, (err, doc) => {
                if (err) reject(err)
                resolve(doc)
            })
        })
    }
    const getScenicInfo = _id => {
        return new Promise((resolve, reject) => {
            attraction_model.findOne({_id}, {
                name: true
            }, (err, doc) => {
                if(err) reject(err)
                resolve(doc)
            })
        })
    }
    const pHotMsg = new Promise((resolve, reject) => {
        commit_model.find().sort('-like').limit(10).exec(async (err, doc) => {
            if (err) reject(err)
            let pCommits = Promise.all(doc.map(async item => {
                let userInfo = await getUserInfo(item.u_id)
                let scenicInfo = await getScenicInfo(item.s_id)

                return {
                    s_id: item.s_id,
                    scenicName: scenicInfo.name,
                    c_id: item._id,
                    date: item.date,
                    like: item.like,
                    content: item.content,
                    u_id: item.u_id,
                    score: item.score,
                    userpic: userInfo.userpic,
                    username: userInfo.username
                }
            }))
            let commits = await pCommits
            resolve(commits)
        })
    })
    const pAttrsInfo = new Promise((resolve, reject) => {
        attraction_model.find({}, {
            name: true,
            id: true,
            pictrue: true
        }, async (err, doc) => {
            if (err) reject(err)

            let attrs_info = []
            doc.map(item => {
                attrs_info.push({
                    name: item.name,
                    id: item.id,
                    img: item.pictrue[0]
                })
            })
            resolve(attrs_info)
        })
    })

    try {
        console.time()
        const attrs_info = await pAttrsInfo
        const news_info = await pNews
        const hot_msg = await pHotMsg
        console.timeEnd()
        ctx.body = {
            code: 200,
            data: {
                attrs_info,
                news_info,
                hot_msg
            }
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            data: {}
        }
        throw error
    }
}