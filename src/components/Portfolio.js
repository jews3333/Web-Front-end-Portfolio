import React, { Component } from 'react';

class Portfolio extends Component {
    
    render(){
        const { list } = this.props;
        return (
            <div>
            {list ? list.map((list, index) => <div id={list.id} key={index}>{list.title}</div>) : null}
        </div>
        )
    }
}

export default Portfolio;