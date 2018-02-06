import React, {Component} from 'react';
import queryString from '../../util/query-string';
import Axios from 'axios';
import './style.less';
import {Progress} from 'antd-mobile';
import TimeResult from '../time-match';
import MvpResult from '../mvp';

class Detail extends Component {
    constructor() {
        super(),
        this.state = {
            resultData:{
                sec_scores:[],
            },
            detailData:{},
        }
    }

    componentDidMount() {
        this.getDetail();
    }

    getDetail() {
        const scheduleId = queryString.call(this, 'sch_id');
        const liveId = queryString.call(this, 'bid');
        Axios.post('/api/result/detail', {scheduleId , liveId}).then(res => {
            this.setState({
                resultData: res.data.broadcast_info,
                detailData: res.data.live_stat_4_nba,
            });
        });
    }

    render() {
        const resultData = this.state.resultData;
        const detailData = this.state.detailData;
        const percent = resultData.circleVoteNumLeft/(resultData.circleVoteNumRight+resultData.circleVoteNumLeft)*100;
        return (
            <div className="detail-page">
                <div className="bg-header">
                    <div className="team-info">
                        <div className="team">
                            <img src={resultData.t1_icon} />
                            <p>{resultData.t1_name}</p>
                        </div>
                        <div className="point">
                            <p>{resultData.match_status}</p>
                            <p className="point-number">
                                <span>{resultData.t1_point}</span>
                                <span>:</span>
                                <span>{resultData.t2_point}</span>
                            </p>
                        </div>
                        <div className="team">
                            <img src={resultData.t2_icon} />
                            <p>{resultData.t2_name}</p>
                        </div>
                    </div>
                    <div className="progress">
                        <Progress percent={percent} position="normal" appearTransition />
                    </div>
                </div>
                <div className="time-table table">
                    <TimeResult result={resultData}></TimeResult>
                </div>
                <div className="mvp-table table">
                    <MvpResult mvp={detailData.teamStat} t1_icon={resultData.t1_icon} t2_icon={resultData.t2_icon}></MvpResult>
                </div>
            </div>
        );
    }
}

export default Detail;