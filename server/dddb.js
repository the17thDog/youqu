const mongoose = require('mongoose')
const users_Schema = require('./models/users')
const commits_Schema = require('./models/commits')
const attractions_Schema = require('./models/attractions')
const news_Schema = require('./models/news')


const db = mongoose.connect("mongodb://localhost:27017/Gouzi", err => {
    if(err) {
        console.log('数据库连接失败')
    }
});

const user_model = mongoose.model('User', users_Schema)
const commit_model = mongoose.model('Commit', commits_Schema)
const attraction_model = mongoose.model('Attraction', attractions_Schema)
const news_model = mongoose.model('News', news_Schema)


news_model.create({
    scenic_id: 'helonggongyuan',
    title: '贺龙公园 是为纪念贺龙元帅转战天子山而建，坐落湖南省张家界市天子山上，在1200米的千层岩左侧，一般归类于石家檐游览线。公园内主要游览点有贺龙元帅铜像、兵器馆、贺龙元帅陈列馆、将军碑林（建设中）等',
    image: '../../static/helonggongyuan1.jpg'
})
// attraction_model.create({
//     name: '御笔峰',
//     id: 'yubifeng',
//     praise: 0,
//     assessment: 0,
//     badReview: 0,
//     pictrue: [
//         '../../static/yubifeng1.jpg',
//         '../../static/yubifeng2.jpg',
//         '../../static/yubifeng3.jpg'
//     ],
//     summary: '御笔峰坐落于天子山自然保护区，是天子山风景区的最佳景点之一。位于天子山天子阁西侧的山谷中。数十座错落有致的秀峰突起，遥冲蓝天，靠右的石峰像倒插的御笔， 靠左的石峰似搁笔的“江山”，景色变化万千。 它是张家界风景区的标志，不断出现在海内外各种媒体和宣传品上面，堪称天下一绝。三座石峰，高低不一，峰顶长有松树，极象几枝倒插的毛笔。日照霞染生辉，云雾涌动时隐时现，精致绝美。'
// },(err, doc) => {
//     if (err) {
//         return
//     }
//     console.log(doc)
// })

// user_model.create({
//     nickname: '',
//     username: 'gggouzi',
//     password: '1324567',
//     isAdmin: false
// }, (err, doc) => {
//     if (err) return
//     console.log(doc)
//     commit_model.create({
//         u_id: doc._id,
//         score: 5,
//     })
// })

// commit_model.find({}).populate('u_id').exec((err, doc) => {
//     if (err) console.log(err)
//     console.log(doc)
// })