const mongoose = require('mongoose')

const db = mongoose.connect("mongodb://localhost:27017/Gouzi", err => {
    if(err) {
        console.log('数据库连接失败')
    }
});
let Schema = mongoose.Schema

let Ber = mongoose.model('Ber', { name: String })
let danaokuo = new Ber({ name: "zhengjiakun"})

danaokuo.save(err => {
    if (err) console.log(123)
    console.log('yes')
})