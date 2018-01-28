import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from '../components/app';
import About from '../components/about';

const routes = (
    <Router>  
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
        </Switch>
    </Router>    
)

export default routes;