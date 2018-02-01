import {reject, resolve} from '_any-promise@1.3.0@any-promise';
import Axios from 'axios';

const getDetail = async (ctx) => {
    const body = ctx.request.body;
    const sch_id = body.scheduleId;
    const bid = body.liveId;

    const res = await Axios.get(`https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=live_stat_4_nba%2Cbroadcast_info&sch_id=${sch_id}&bid=${bid}`);

    console.log(res);
    const data = res.data;
    ctx.body = data;
}

export default getDetail;