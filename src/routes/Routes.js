import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { Home, Profile, Portfolio, Context, ContextList } from './index';
import Navgation from '../components/Navgation'

const Routes = () => {
    return (
        <Router>
            {/* <NavLink to="/context" className='link_context' activeClassName='active'>Context Us</NavLink> */}
            <Navgation/>
            <Switch>
                <Route exact path="/" component={Home}/> 
                <Route path="/context/list" component={ContextList}/>
                {/* <Route path="/context" component={Context}/> */}
                <Route path="/portfolio" component={Portfolio}/>
                <Route path="/profile" component={Profile}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default Routes;