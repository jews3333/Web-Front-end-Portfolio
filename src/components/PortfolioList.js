import React from 'react';

const PortfolioList = ({ title, year, url, image }) => {

    return (
        <div className="portfolioList">
            <div className="image">
                <img src={image} alt={title}/>
            </div>
            <h3 className="title">{title}</h3>
            <div className="year">{year}</div>
            {url ? <div className="url"><a href={url} title="새창으로 열림" target="_blank" >홈페이지</a></div> : null}
        </div>
    )
}

export default PortfolioList;