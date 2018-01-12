const formatRespnse = async (ctx,next) => {
    await next();
    // 如果有数据返回
    if (ctx.url!=='/' && ctx.body) {
       // console.log(ctx.url)
        ctx.body = {
            code:0,
            success:true,
            data:ctx.body,
        }
    } else if(ctx.url==='/') {
        next();
    } else {
        ctx.body = {
            code: 0,
            success: false,
        }
    }
}

export default formatRespnse;