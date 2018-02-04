import {reject, resolve} from '_any-promise@1.3.0@any-promise';
import Collection from '../mongo/index';
import Axios from 'axios';

const hour = new Date().getHours();
async function getDetailRemote(sch_id,bid) {
    const dataResult = await Axios.get(`https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=live_stat_4_nba%2Cbroadcast_info&sch_id=${sch_id}&bid=${bid}`);
    return dataResult;
}
const getDetail = async (ctx) => {
    const body = ctx.request.body;
    const sch_id = body.scheduleId;
    const bid = body.liveId;
    const collect = "gameDetail";
    let dataResult = await Collection.findOne(collect,{"broadcast_info.sch_id":Number(sch_id)});

    if(hour >= 14) {
        if(!dataResult && !dataResult._id) {
            dataResult = await getDetailRemote(sch_id,bid);
            dataResult = dataResult.data;
            Collection.insert(collect, dataResult);
        } 
    } else {
            dataResult = await getDetailRemote(sch_id,bid);
            dataResult = dataResult.data;
    }
    //Collection.insert(collect,data);

    ctx.body = dataResult;
}

export default getDetail;