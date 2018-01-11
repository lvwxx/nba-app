import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import Axios from 'axios';
import './less/base.less';

//添加响应拦截器
Axios.interceptors.response.use((resp) => {
    //对响应数据做些事
    return resp.data;
},(error) => {
    //请求错误时做些事
    return Promise.reject(error);
});


ReactDOM.render(
    <App />, document.getElementById('app'));