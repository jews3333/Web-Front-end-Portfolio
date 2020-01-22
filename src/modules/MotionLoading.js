import React, { Component } from 'react';
import Rocket from '../images/rocket.svg';
import '../styles/MotionLoading.scss';
import WithLoad from '../HOC/WithLoad';

class MotionLoading extends Component {
    render(){
        const { loaded } = this.props;

        if(loaded) {
            let rocket = document.querySelector('.loading_rocket');
            setTimeout(() => {
                if(rocket){
                    document.querySelector(".App").removeChild(rocket);
                };
            }, 1000)
        }
        
        return (
            <div className="loading_rocket" data-loaded={loaded}>
                <img src={Rocket} alt="LOADING..."/>
                <span className="cloud"></span>
                <span className="cloud"></span>
                <span className="cloud"></span>
            </div>
        )
    }
    
}

export default WithLoad(MotionLoading);