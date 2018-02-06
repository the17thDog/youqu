module.exports = async ctx => {
    console.log(1111)
    console.log(JSON.stringify(ctx.request.body))
    ctx.response.type = 'text/plain'
    ctx.body = 'ok'
}