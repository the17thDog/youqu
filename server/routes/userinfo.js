module.exports = async ctx => {
    if (ctx.cookies.get('userInfo')){
        try {
            const userInfo = JSON.parse(ctx.cookies.get('userInfo'))
            const resData = {
                data: userInfo,
                code: 200
            }

            ctx.body = resData
        } catch (error) {
            throw error
        }
    } else {
        const resData = {
            data: {},
            code: 400
        }

        ctx.body = resData
    }
}