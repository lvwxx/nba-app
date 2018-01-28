import React, {Component} from 'react';
import './style.less';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import {ActivityIndicator, Toast} from 'antd-mobile';


class Result extends Component {
    constructor(props) {
        super(props),
        this.state = {
            gameRes:[{}],
            id:null,
            date: '',
            animating: false,
        }
    }

    // componentDidMount() {
    //     const dateArr = this.state.date.split('-');
    //     const date = `${dateArr[1]}月${dateArr[2]}日`;
    //     console.log(date);
    //     this.getDateRes(date);
    //     console.log(2);
    // }

    componentWillReceiveProps(state) {
        if(state.date !== this.props.date) {
            const dateArr = state.date.split('-');
            const date = `${dateArr[1]}月${dateArr[2]}日`;
            this.setState({
                date,
            },()=>{
                this.getDateRes();
            });
        }
    }

    getDateRes() {
        this.setState({
            animating: true,
        });
        const date = this.state.date;
        Axios.post('/api/data/todayResult', {date}).then(res=>{
            if(res.data.length>0) {
                const count = res.data[0].indexLiveList.length;
                this.setState({
                    gameRes:res.data[0].indexLiveList,
                    id:111,
                    animating: false,
                });
                this.props.changeCount(count);
            } else {
                Toast.fail('暂无数据');
                this.setState({
                    animating: false,
                    gameRes: [{}],
                });
            }
           
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
                        <p>{item.leftTime}</p>
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
            <div className="result-box">
                <ul>{list}</ul>
                <div className="toast-example">
                    <ActivityIndicator
                        toast
                        text="Loading..."
                        animating={this.state.animating}
                    />
                </div>
                <div><Link to="/about">{this.state.date}</Link></div>
            </div>
        );
    }
}

export default Result;