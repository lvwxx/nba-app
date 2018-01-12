import React, {Component} from 'react';
import {Tabs, Badge} from 'antd-mobile';
import Result from '../result/index';
import Rank from '../rank/index';
import Axios from 'axios';
import './style.less';

class Tab extends Component {
    constructor() {
        super();
        this.state = {
            count:0,
        }
    }

    changeCount(count) {
        this.setState({
            count:count,
        });
    }

    render() {
        const tabs = [
            {title: <Badge text={`今日(${this.state.count})场`}>first</Badge>, sub: '1'},
            {title: 'second', sub: '2'},
        ];

        return (
            <Tabs tabs={tabs} 
            initialPage={0}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
            >
                <div className="content-wrap">
                    <Result changeCount={this.changeCount.bind(this)}></Result>
                </div>
                <div className="content-wrap">
                    <Rank></Rank>
                </div>
            </Tabs>
        )
    }

}

export default Tab;