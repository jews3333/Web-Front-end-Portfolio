import React from 'react';
import '../styles/Navigation.scss';
import { NavLink } from 'react-router-dom';
// import { IoIosCheckmark } from 'react-icons/io';
import WithLoad from '../HOC/WithLoad';

const Navigation = ({ loaded }) => {
    return (
        <div id="navigation" data-loaded={loaded}>
            <NavLink exact to="/" activeClassName='active'>Home</NavLink>
            <NavLink to="/portfolio" activeClassName='active'>Portfolio</NavLink>
            <NavLink to="/profile" activeClassName='active'>Profile</NavLink>
        </div>
    );
}

export default WithLoad(Navigation);