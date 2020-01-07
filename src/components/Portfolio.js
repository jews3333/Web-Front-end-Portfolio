import React from 'react';
import PortfolioList from './PortfolioList';

import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
}

const Portfolio = ({ list }) => {
    return (
        <div className="component">
            <SlickSlider {...settings}>
                {list ? list.map((list, index) => 
                    <PortfolioList key={index} id={list.id} title={list.title} sumry={list.sumry} time={list.time} url={list.url} image={list.image} />
                ) : null}
            </SlickSlider>
        </div>
    )
}

export default Portfolio;