import React from 'react';
import '../styles/Home.scss';
import WithLoad from '../HOC/WithLoad';

const Home = ({ loaded }) => {
    return (
        <div id="home" data-loaded={loaded}>
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
    );
}
        
export default WithLoad(Home);