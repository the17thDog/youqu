const mongoose = require('mongoose')
const attractions_Schema = require('../models/attractions')
const commit_Schema = require('../models/commits')
const user_Schema = require('../models/users')

const commit_model = mongoose.model('Commit', commit_Schema)
const attraction_model = mongoose.model('Attraction', attractions_Schema)
const user_model = mongoose.model('User', user_Schema)

module.exports = async ctx => {
    const { u_id, c_id } = ctx.request.body
    const pIsLiked = new Promise((resolve, reject) => {  //是否赞过该评论
        user_model.findOne({ _id: u_id }, (err, doc) => {
            if (err) reject(err)
            if (doc.likeList.includes(c_id)) {
                resolve(true)
            } else {
                resolve(false)
            }
        })
    })
    const pAddId = () => {
        return new Promise((resolve, reject) => {  //添加c_id到likeList
            user_model.update({ _id: u_id }, {
                '$push': {
                    likeList: c_id
                }
            }, (err, doc) => {
                if (err) reject(err)
                console.log(doc)
                resolve()
            })
        })
    }
    
    const pRemoveId = () => {
        return new Promise((resolve, reject) => {  //删除c_id从likeList
            user_model.update({ _id: u_id }, {
                '$pull': {
                    likeList: c_id
                }
            }, (err, doc) => {
                if (err) reject(err)
                console.log(0)
                resolve()
            })
        })
    }
    
    const pDecreOrIncre = flag => {
        return new Promise((resolve, reject) => {
            commit_model.findOne({ _id: c_id }, (err, doc) => {
                if (err) reject(err)
                try {
                    if (flag) { //若flag为真留言like++
                        doc.like++
                    }else {
                        doc.like--
                    }
                    doc.save()
                    resolve()
                } catch (error) {
                    reject(error)
                }
            })
        })
    }

    try {
        let isLiked = await pIsLiked
        console.log(isLiked)
        let successData = {
            code: 200,
            data: {
                msg: 'success'
            }
        }
    
        if (isLiked) {  //若赞过了
            await pRemoveId() //移除likeList中的c_id
            await pDecreOrIncre(false)
            ctx.body = successData
        } else {
            await pAddId()  //添加c_id到likeList
            await pDecreOrIncre(true)
            ctx.body = successData
        }
    } catch (error) {
        ctx.body = {
            code: 400,
            data: {
                msg: 'faild'
            }
        }
        throw error
    }
}