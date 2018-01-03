import React, {Component} from 'react';
import './tab.less';
import Axios from 'axios';

class Tab extends Component {
    constructor() {
        super(),
        this.state = {
            value: 789,
        }
    }

    click() {
        Axios.post('/api/data/a').then(res=>{
            console.log(res);
            this.setState({value:111});
        });
    }

    render() {
        return (
            <div className="tab-warp" onClick={() => this.click()}>
                {this.state.value}
            </div>
        );
    }
}

export default Tab;