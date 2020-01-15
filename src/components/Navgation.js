import React, { Component } from 'react';
import '../styles/Navigation.scss';
import { NavLink, withRouter } from 'react-router-dom';
// import { IoIosCheckmark } from 'react-icons/io';
import WithLoad from '../HOC/WithLoad';
import { toast } from '../modules/toastMessage';

class Navigation extends Component { //withRouter의 props를 받기위해 class형으로 작성

    

    navLinkHandler = (e) => {
        e.preventDefault();

        const path = e.target.href.split("/")[3];

        if(this.props.history.location.pathname !== "/"+path){
            // document.querySelector(".component").style.opacity = 0;
            // document.querySelector(".component").style.transform = "translateX(-100%)";
            document.querySelector(".component").classList.add("changed");

            setTimeout(() => {
                this.props.history.push("/"+path);
            },500);
        }
        
    }

    render() {
        const { loaded } = this.props;
        return (
            <div id="navigation" data-loaded={loaded}>
                <NavLink exact to="/" activeClassName='active' onMouseEnter={() => toast("메인페이지로 가요!")} onClick={(e) => this.navLinkHandler(e)}>Home</NavLink>
                <NavLink to="/portfolio" activeClassName='active' onMouseEnter={() => toast("포트폴리오 보러갈까요?")} onClick={(e) => this.navLinkHandler(e)}>Portfolio</NavLink>
                <NavLink to="/profile" activeClassName='active' onMouseEnter={() => toast("저에 대해서 궁금하신가요?")} onClick={(e) => this.navLinkHandler(e)}>Profile</NavLink>
            </div>
        );
    }
}

export default WithLoad(withRouter(Navigation)); //함께 사용하기 위함