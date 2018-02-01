import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../components/app';
import Detail from '../components/detail';

const routes = (
    <Router>  
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/detail" component={Detail} />
        </Switch>
    </Router>    
)

export default routes;