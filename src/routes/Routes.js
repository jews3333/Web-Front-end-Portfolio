import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { Home, Profile, Portfolio, Context } from './index';
import Navgation from '../components/Navgation'

const Routes = () => {
    return (
        <Router>
            <Link to="/context" style={{position:"absolute",top:"2vh",left:"2vh",fontSize:"0.9em","zIndex":"1"}}>Context Us</Link>
            <Navgation/>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/context" component={Context}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/profile" component={Profile}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default Routes;