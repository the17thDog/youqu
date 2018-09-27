const mongoose = require('mongoose')
const attractions_Schema = require('../models/attractions')

const attraction_model = mongoose.model('Attraction', attractions_Schema)

module.exports = async ctx => {
    const { text } = ctx.request.query
    const reg = new RegExp(`${text}`, 'i')

    const pSearchText = new Promise((resolve, reject) => {
        attraction_model.find({ name: reg },{
            name: true,
            id: true,
            _id: false

        }, (err, doc) => {
            if (err) reject(err)
            resolve(doc)
        })
    })

    try {
        let searchText = await pSearchText
        
        ctx.body = {
            code: 200,
            data: {
                searchText
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