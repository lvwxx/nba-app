import React, {Component} from 'react';
import Axios from 'axios';
import './style.less';

class Rank extends Component {
    constructor() {
        super();
        this.state = {
            westPart:[],
            eastPart:[],
            rankList:[],
        }
    }

    componentDidMount() {
        Axios.post('/api/result/rank').then(res => {
            // console.log(res);
            this.setState({
                westPart: res.data.westPart,
                eastPart: res.data.eastPart,
                rankList: res.data.westPart,
            });
        });
    }

    changeRankList(part) {
        if (part === 'west') {
            this.setState({
                rankList: this.state.westPart,
            });
        } else {
            this.setState({
                rankList: this.state.eastPart,
            }); 
        }
    }


    render() {
        // 显示的list
        const rankList = this.state.rankList.map((item,index) => {
            let bgC = index < 8 ? {background:"#f3bf2e"} : {background:"#B3B3B5"};
            return (
                <li key={index}>
                    <span><i className="rank-number" style={bgC}>{index+1}</i>{item.cnshortname}</span>
                    <span>{item.wins}</span>
                    <span>{item.losses}</span>
                    <span>{item.winper}</span>
                </li>
            )
        });

        return (
            <div className="rank-list-wrap">
                <nav>
                    <li className={this.state.rankList==this.state.westPart ? "nav_active" : "nav_normal"} onClick={this.changeRankList.bind(this,'west')}>西部联盟</li>
                    <li className={this.state.rankList==this.state.eastPart ? "nav_active" : "nav_normal"} onClick={this.changeRankList.bind(this,'east')}>东部联盟</li>
                </nav>
                <ul>
                    <li className="li_title">
                        <span>球队</span>
                        <span>胜</span>
                        <span>负</span>
                        <span>胜率</span>
                    </li>
                    {rankList}
                </ul>
            </div>
        )
    }
}

export default Rank;