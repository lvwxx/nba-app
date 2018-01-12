import React, {Component} from 'react';
import './style.less';
import Axios from 'axios';

class Result extends Component {
    constructor() {
        super(),
        this.state = {
            gameRes:[{}],
            id:null,
        }
    }

    componentDidMount() {
        Axios.post('/api/data/todayResult').then(res=>{
            const count = res.data[0].indexLiveList.length;
            this.setState({
                gameRes:res.data[0].indexLiveList,
                id:111,
            });
            this.props.changeCount(count);
        });
    }

    click() {
       // console.log(this)
    }

    render() {
        const resultList = this.state.gameRes;
        const list = resultList.map((item,index) => {
            return (
                <li key={index}>
                    <div className="team">
                        <img className="team_img" src={item.homeTeamLogo} />
                        <div className="team_info">
                            <strong className="score">{item.homeScore}</strong>
                            <p className="name">{item.homeTeamName}</p>
                        </div>
                    </div>
                    <div className="time">
                        <span>{item.statusName}</span>
                    </div>
                    <div className="team">
                        <div className="team_info">
                            <strong className="score">{item.visitScore}</strong>
                            <p className="name">{item.visitTeamName}</p>
                        </div>
                        <img className="team_img" src={item.visitTeamLogo} />
                    </div>
                </li>
            )
        });

        return (
            <div className="result-box" onClick={() => this.click()}>
                <ul>{list}</ul>
            </div>
        );
    }
}

export default Result;