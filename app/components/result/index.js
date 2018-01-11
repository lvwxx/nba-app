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
        Axios.post('/api/data/a',{date:'01月10日'}).then(res=>{
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
        const list = resultList.map((item,index) => {
            return (
                <li key={index}>{item.liveId}</li>
            )
        });

        return (
            <div className="" onClick={() => this.click()}>
                <ul>{list}</ul>
            </div>
        );
    }
}

export default Result;