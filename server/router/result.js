const router = require('koa-router')();
import {getDayResults} from '../controllers/resule';
import getRank from '../controllers/rank';
import getDetail from '../controllers/detail';



const routers = router
    .post('/todayResult', getDayResults)
    .post('/rank', getRank)
    .post('/detail', getDetail)


module.exports = routers;