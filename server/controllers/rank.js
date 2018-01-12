import { reject, resolve } from '_any-promise@1.3.0@any-promise';
import Axios from 'axios';

const getRank = async (ctx) => {
    const body = ctx.request.body;

    const res = await Axios.post('https://live.3g.qq.com/g/s?aid=action_api&module=nba&action=team_rank&rt=w%2Ce%2Cd&sid=');


    const team = res.data.team_rank.team;
    const eRank = res.data.team_rank.e;
    const wRank = res.data.team_rank.w;

    const eastPart = [];
    const westPart = [];

    const keys = Object.keys(team);

    eRank.forEach(item => {
        keys.forEach((key) => {
            if (item === team[key].id) {
                eastPart.push(team[key]);
            }
        });
    });

    wRank.forEach(item => {
        keys.forEach(key => {
            if (item === team[key].id) {
                westPart.push(team[key]);
            }
        })
    })
    
    const data = {
        eastPart,
        westPart,
    }

    console.log(res.data);
    
    
    ctx.body = data;
}

export default getRank;