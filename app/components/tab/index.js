import React, {Component} from 'react';
import {Tabs, Badge} from 'antd-mobile';
import Result from '../result/index';
import Axios from 'axios';
import './style.less';

class Tab extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const tabs = [
            {title: <Badge text={'今日(20)'}>first</Badge>, sub: '1'},
            {title: 'second', sub: '2'},
        ];

        return (
            <Tabs tabs={tabs} 
            initialPage={0}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
            >
                <div className="content-wrap">
                    <Result></Result>
                </div>
                <div className="content-wrap">
                    456
                </div>
            </Tabs>
        )
    }

}

export default Tab;