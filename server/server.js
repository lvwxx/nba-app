import Koa from 'koa';
import views from 'koa-views';
import path from 'path';
import Router from 'koa-router';
// middleware
import formatResponse from './middleware/response';
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const routers = require('./router/index');



const app = new Koa();
let router = new Router();

app.use(bodyParser());

app.use(require('koa-static')(path.join(__dirname,'../dist')));
app.use(views(path.join(__dirname,'../views'),{
    extension: 'html'
}));

app.use(formatResponse);

app
    .use(routers.routes())
    .use(routers.allowedMethods())   

app.use(async (ctx)=>{
    await ctx.render('index.html');
});




app.listen(9090);

console.log('启动9090端口');

module.exports = app;
