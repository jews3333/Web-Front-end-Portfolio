import React from 'react';
import '../styles/Home.scss';
import WithLoad from '../HOC/WithLoad';

const Home = ({ loaded }) => {

    return (
        <div className="component" id="home" data-loaded={loaded}>
            <div>
                <span>P</span>
                <span>O</span>
                <span>R</span>
                <span>T</span>
                <span>F</span>
                <span>O</span>
                <span>L</span>
                <span>I</span>
                <span>O</span>
            </div>
        </div>
    );
}
        
export default WithLoad(Home);