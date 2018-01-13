import { reject, resolve } from '_any-promise@1.3.0@any-promise';
import Collection from '../mongo/index'
import Axios from 'axios';

const RESULT_URL = 'https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=index_live&sid=';
const date = new Date();
const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth();
const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const TODAY = `${month}月${day}日`;


// 获取当日比赛结果信息
const getGameRes = () => {
    return new Promise((resolve,reject)=>{
        Axios.get(RESULT_URL).then((res) => {
            const data = res.data;
            const todayResult = data.index_live.data;
            const date = todayResult.indexLiveList[0].date;
            todayResult.dateStr = date;
            resolve(todayResult);
        }).catch(error => {
            console.log(error);
            reject(error);
        });
    })
    
};

export const getDayResults = async (ctx) => {
    const body = ctx.request.body;
    let dateStr = body.date;

    dateStr = dateStr ? dateStr : TODAY;
    // 连接mongo数据库并查找数据
    let result = await Collection.find({dateStr});

    if (result.length === 0) {
        const todayReslut = await getGameRes();
        const res = await Collection.insert(todayReslut);
        result = await Collection.find({dateStr});
    } else {
        const hour = new Date().getHours();
        if (hour >= 15) {
            ctx.body = result;
            return;
        }
        const id = result[0]._id;       
        const todayResult = await getGameRes();
        //console.log(todayResult);

        const res = await Collection.update({"_id": id},{$set:todayResult});
        result = await Collection.find({dateStr});
    }
    
    ctx.body = result;
};