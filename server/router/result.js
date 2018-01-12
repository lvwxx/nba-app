const router = require('koa-router')();
import {getDayResults} from '../controllers/resule';
import getRank from '../controllers/rank';



const routers = router
    .post('/data/todayResult', getDayResults)
    .post('/data/rank', getRank)


module.exports = routers;