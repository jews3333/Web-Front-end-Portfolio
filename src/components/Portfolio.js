import React from 'react';

const Portfolio = ({ list }) => {
    return (
        <div>
            {list ? list.map((list, index) => <div id={list.id} key={index}>{list.title}</div>) : null}
        </div>
    )
}

export default Portfolio;