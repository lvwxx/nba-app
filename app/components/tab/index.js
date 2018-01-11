import React, {Component} from 'react';
import {Tabs} from 'antd-mobile';
import Result from '../result/index';
import Axios from 'axios';

class Tab extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        const tabs = [
            {title: 'first', sub: '1'},
            {title: 'second', sub: '2'},
        ];

        return (
            <Tabs tabs={tabs} 
            initialPage={0}
            tabBarPosition="bottom"
            renderTab={tab => <span>{tab.title}</span>}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'red' }}>
                    <Result></Result>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: 'blue' }}>
                    456
                </div>
            </Tabs>
        )
    }

}

export default Tab;