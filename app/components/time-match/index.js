import React, {Component} from 'react';
import './style.less';

class TimeResult extends Component {
    constructor() {
        super(),
        this.state = {
            result: {},
        }
    }

    render() {
        const result = this.props.result;
        
        for(let i=0;i<4;i++) {
            result.sec_scores[i] = result.sec_scores[i] === undefined ? [{score1:0,score2:0}] : result.sec_scores[i];
        }
        const sectionPoint1 = result.sec_scores.map((item, index)=> {
            return (
                <td key={index}>
                    {item.score1}
                </td>
            )
        });
        const sectionPoint2 = result.sec_scores.map((item, index)=> {
            return (
                <td key={index}>
                    {item.score2}
                </td>
            )
        });
        return (
            <div className="section-point">
                <div className="title">实时赛况</div>
                <table>
                    <thead>
                        <tr>
                            <td>球队</td>
                            <td>1节</td>
                            <td>2节</td>
                            <td>3节</td>
                            <td>4节</td>
                            <td>总分</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={result.t1_icon} /></td>
                            {sectionPoint1}
                            <td>{result.t1_point}</td>
                        </tr>
                        <tr>
                            <td><img src={result.t2_icon} /></td>
                            {sectionPoint2}
                            <td>{result.t2_point}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TimeResult;