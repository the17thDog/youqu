module.exports = async ctx => {
    ctx.cookies.set('userInfo', '')

    ctx.body = {
        code: 200,
        data: {
            msg: '退出成功'
        }
    }
}