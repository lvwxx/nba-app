import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import './less/base.less';
import Routes from './router';
import Route from '_react-router-dom@4.2.2@react-router-dom/Route';


//添加响应拦截器
Axios.interceptors.response.use((resp) => {
    //对响应数据做些事
    return resp.data;
},(error) => {
    //请求错误时做些事
    return Promise.reject(error);
});

ReactDOM.render(Routes, document.getElementById('app'));