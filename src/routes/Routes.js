import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home, Profile, Portfolio } from './index';
import Navgation from '../components/Navgation'

const Routes = () => {
    return (
        <Router>
            <Navgation/>
            <Switch>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/" component={Home}/> 
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default Routes;