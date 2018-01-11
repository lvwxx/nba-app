const router = require('koa-router')();
import {getDayResults} from '../controllers/resule';

// const routers = router.post('/data/a', async (ctx) =>{
//     console.log(123)
//     ctx.body="123";
// })


const routers = router.post('/data/todayResult', getDayResults);

module.exports = routers;