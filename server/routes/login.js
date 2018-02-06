module.exports = async ctx => {
    console.log(JSON.stringify(ctx.request.body))
    ctx.response.type = 'text/plain'
    ctx.body = 'ok'
}