import React from 'react';
// import { storage } from '../firebase/init';

const PortfolioList = ({ id, title, sumry, time, url, image }) => {

    return (
        <div id={id}>
            <div>
            </div>
            <div>{title}</div>
            <div>{sumry}</div>
            <div>{url}</div>
            <div>{time}</div>
        </div>
    )
}

export default PortfolioList;