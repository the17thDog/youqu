const mongoose = require('mongoose')
const commit_Schema = require('../models/commits')

const commit_model = mongoose.model('Commit', commit_Schema)

module.exports = async ctx => {
    try {
        const data = ctx.request.body
        const commit = new commit_model(data)
        
        commit.save()
        const res = {
            code: 200,
            data: {
                msg: '分享成功！'
            }
        }
        ctx.body = res
    } catch (error) {
        ctx.body = {
            code: 400,
            data: {
                msg: '失败了...'
            }
        }
    }
}