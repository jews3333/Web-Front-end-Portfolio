import React from 'react';
import PortfolioList from './PortfolioList';

import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Portfolio.scss';

const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    responsive:[
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                centerPadding: '80px'
            }
        }
    ]
}

const Portfolio = ({ list }) => {
    return (
        <div className="component">
            <SlickSlider {...settings}>
                {list ? list.map((list, index) => 
                    list.show ?
                    <PortfolioList key={index} title={list.title} year={list.year} url={list.url} image={list.image} />
                    : null
                ) : null}
            </SlickSlider>
        </div>
    )
}

export default Portfolio;