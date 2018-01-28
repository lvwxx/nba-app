import React, {Component} from 'react';
import {Tabs, Badge, NavBar, Icon} from 'antd-mobile';
import Result from '../result/index';
import Rank from '../rank/index';
import Axios from 'axios';
import './style.less';

class Tab extends Component {
    constructor() {
        super();
        this.state = {
            count:0,
            date: '',
        }
    }

    componentDidMount() {
        this.setDate();
    }

    changeCount(count) {
        this.setState({
            count:count,
        });
    }

    // 初始化当前时间
    setDate(str=new Date()) {
        const date = str;
        const year = date.getFullYear();
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth + 1; 
        const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
        this.setState({
            date: `${year}-${month}-${day}`,
        }); 
    }

    // 回退、前进时间 
    changeDate(operation) {
        const restTime = 24*60*60*1000;
        const operationTime = operation === 'next' ? restTime : -restTime;
        const date = this.state.date;
        let dateStr = new Date(date).getTime() + operationTime;
        dateStr = new Date(dateStr);
        this.setDate(dateStr);
    }

    render() {
        const tabs = [
            {title: <Badge text={`当日(${this.state.count})场`}>当日赛果</Badge>, sub: '1'},
            {title: '当前排名', sub: '2'},
        ];

        return (
            <Tabs tabs={tabs} 
            initialPage={0}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
            >
                <div className="content-wrap">
                    <NavBar
                        mode="dark"
                        icon={<Icon type="left" />}
                        onLeftClick={() => this.changeDate('pre')}
                        rightContent={[
                            <Icon key="0" type="right" onClick={()=>this.changeDate('next')}/>,
                        ]}
                        > {this.state.date}
                    </NavBar>

                    <Result date={this.state.date} changeCount={this.changeCount.bind(this)}></Result>
                </div>
                <div className="content-wrap">
                    <Rank></Rank>
                </div>
            </Tabs>
        )
    }

}

export default Tab;