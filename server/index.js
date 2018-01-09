const Koa = require('koa2')
const fs = require('fs')

const app = new Koa()

app.use(async ctx => {
  let url = './www/' + ctx.url
  let data = await rFile(url)
  ctx.response.type = 'text/plain'
  ctx.body = data
})

app.listen(3000)

function rFile(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
