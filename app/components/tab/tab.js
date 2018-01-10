import React, {Component} from 'react';
import './tab.less';
import Axios from 'axios';

class Tab extends Component {
    constructor() {
        super(),
        this.state = {
            gameRes:[{}],
            id:null,
        }
    }

    componentDidMount() {
        Axios.post('/api/data/a').then(res=>{
            console.log(res.data[0].indexLiveList);
            this.setState({
                gameRes:res.data[0].indexLiveList,
                id:111,
            });
        });
    }

    click() {
       
    }

    render() {
        const resultList = this.state.gameRes;
        console.log(resultList);
        const list = resultList.map((item,index) => {
            return (
                <li key={index}>{item.liveId}</li>
            )
        });
        return (
            <div className="tab-wrap" onClick={() => this.click()}>
                <ul>{list}</ul>
            </div>
        );
    }
}

export default Tab;