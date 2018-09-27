const mongoose = require('mongoose')
const user_Schema = require('../models/users')
const commit_Schema = require('../models/commits')
const attractions_Schema = require('../models/attractions')

const user_model = mongoose.model('User', user_Schema)
const commit_model = mongoose.model('Commit', commit_Schema)
const attraction_model = mongoose.model('Attraction', attractions_Schema)

module.exports = async ctx => {
    const pUsers = new Promise((resolve, reject) => {
        user_model.find({}, {
            username: true,
            nickname: true,
            userpic: true,
            _id: true
        }, (err, doc) => {
            if (err) reject(err)
            resolve(doc)
        })
    })
    const getUserInfo  = _id => {
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
    const pCommits = new Promise((resolve, reject) => {
        commit_model.find({}).exec(async (err, doc) => {
            if (err) reject(err)
            let pShares = Promise.all(doc.map(async item => {
                let userInfo = await getUserInfo(item.u_id)
                let scenicInfo = await getScenicInfo(item.s_id)
                return {
                    c_id: item._id,
                    date: item.date,
                    like: item.like,
                    content: item.content,
                    u_id: item.u_id,
                    score: item.score,
                    userpic: userInfo.userpic,
                    username: userInfo.username,
                    scenicName: scenicInfo.name
                }
            }))
            let shares = await pShares
            resolve(shares)
        })
    })

    try {
        let users = await pUsers
        let commits = await pCommits
        ctx.body = {
            code: 200,
            data: {
                users,
                commits
            }
        }
    } catch (error) {
        throw error
        ctx.body = {
            code: 400,
            data: {}
        }
    }
    
}
