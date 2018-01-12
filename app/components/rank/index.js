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
        Axios.post('/api/data/rank').then(res => {
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
            return (
                <li key={index}>
                    <div>{item.cnshortname}</div>
                </li>
            )
        });

        // 动态class
        

        return (
            <div className="rank-list-wrap">
                <nav className="normal-color">
                    <li onClick={this.changeRankList.bind(this,'west')}>西部联盟</li>
                    <li onClick={this.changeRankList.bind(this,'east')}>东部联盟</li>
                </nav>
                <ul>{rankList}</ul>
            </div>
        )
    }
}

export default Rank;