const mongoose = require('mongoose')
const attractions_Schema = require('../models/attractions')
const commits_Schema = require('../models/commits')
const user_Schema = require('../models/users')

const attraction_model = mongoose.model('Attraction', attractions_Schema)
const commit_model = mongoose.model('Commit', commits_Schema)
const user_model = mongoose.model('User', user_Schema)

module.exports = async ctx => {
    const { id } = ctx.query
    console.log(id)
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
    const pOwnCommits = new Promise((resolve, reject) => {
        commit_model.find({ u_id: id }, (err, doc) => {
            if (err) {
                reject(err)
                return
            }
            let pCommitInfo = Promise.all(doc.map(async item => {
                let scenicInfo = await getScenicInfo(item.s_id)

                return {
                    date: item.date,
                    like: item.like,
                    content: item.content,
                    score: item.score,
                    scenicName: scenicInfo.name
                }
            }))
            resolve(pCommitInfo)
        })
    })

    try {
        let ownCommits = await pOwnCommits
        console.log(111)
        ctx.body = {
            code: 200,
            data: {
                commits: ownCommits
            }
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            data: {} 
        }
    }
}