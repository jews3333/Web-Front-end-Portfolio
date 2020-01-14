import React from 'react';
// import '../styles/Star.scss';

const Star = ({length}) => {
    const stars = [];
    
    for(let i=0; i<length; i++){
        stars.push(<div className={`star star${i}`} key={i}></div>);
    }

    return(
        <div className="stars">
            {stars}
        </div>
    );
}

export default Star;