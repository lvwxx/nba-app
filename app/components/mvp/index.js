import React, {Component} from 'react';

function Mvp(props) {
    const mvpObj = props.mvp || {};
    const t1_icon = props.t1_icon || '';
    const t2_icon = props.t2_icon || '';
    console.log(mvpObj);
    return (
        <div className="section-mvp">
            <div className="title">球队数据</div>
            <table>
                <thead>
                    <tr>
                        <td>球队</td>
                        <td>篮板</td>
                        <td>助攻</td>
                        <td>抢断</td>
                        <td>盖帽</td>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                            <td><img src={t1_icon} /></td>
                            <td>{mvpObj.rebounds?mvpObj.rebounds.visit : ''}</td>
                            <td>{mvpObj.assist?mvpObj.assist.visit : ''}</td>
                            <td>{mvpObj.steals?mvpObj.steals.visit : ''}</td>
                            <td>{mvpObj.blocks?mvpObj.blocks.visit : ''}</td>
                        </tr>
                        <tr>
                            <td><img src={t2_icon} /></td>
                            <td>{mvpObj.rebounds?mvpObj.rebounds.home : ''}</td>
                            <td>{mvpObj.assist?mvpObj.assist.home : ''}</td>
                            <td>{mvpObj.steals?mvpObj.steals.home : ''}</td>
                            <td>{mvpObj.blocks?mvpObj.blocks.home : ''}</td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Mvp;