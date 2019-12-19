import React from 'react';
import '../styles/Navigation.scss';
import { NavLink } from 'react-router-dom';
import { IoIosCheckmark } from 'react-icons/io';

const Navigation = () => {
    return (
        <div id="navigation">
            <NavLink exact to="/" activeClassName='active'><IoIosCheckmark size='2em' color='#15e2b4'/>Home</NavLink>
            <NavLink to="/portfolio" activeClassName='active'><IoIosCheckmark size='2em' color='#15e2b4'/>Portfolio</NavLink>
            <NavLink to="/profile" activeClassName='active'><IoIosCheckmark size='2em' color='#15e2b4'/>Profile</NavLink>
        </div>
    );
}

export default Navigation;