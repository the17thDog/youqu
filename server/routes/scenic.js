const mongoose = require('mongoose')
const attractions_Schema = require('../models/attractions')
const commit_Schema = require('../models/commits')
const user_Schema = require('../models/users')

const commit_model = mongoose.model('Commit', commit_Schema)
const attraction_model = mongoose.model('Attraction', attractions_Schema)
const user_model = mongoose.model('User', user_Schema)

module.exports = async ctx => {
    let { id } = ctx.params
    let getUserInfo  = _id => {
        return new Promise((resolve, reject) => {
            user_model.findOne({ _id }, (err, doc) => {
                if (err) reject(err)
                resolve(doc)
            })
        })
    }
    let getCommits = s_id => {
        return new Promise((resolve, reject) => {
            commit_model.find({ s_id }, (err, doc) => {
                if (err) reject(err)
                resolve(doc)
            })
        })
    }
    let pResInfo = new Promise((resolve, reject) => {
        attraction_model.findOne({ id }, async (err, doc) => {
            if (err) reject(err)
            try {
                let resData = {
                    scenicInfo: doc,
                    shareInfo: []
                }
                let commits = await getCommits(doc._id)
                if (!commits.length) {
                    resolve(resData)
                    return
                }
                let pShareInfo = Promise.all(commits.map(async item => {
                    let userInfo = await getUserInfo(item.u_id)
                    return  {
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
                
                resData.shareInfo = await pShareInfo
                resolve(resData)
            } catch (error) {
                reject(error)
            }
        })
    })

    try {
        const resInfo = await pResInfo

        ctx.body = resInfo
    } catch (error) {
        console.log('error', error)
    }
}