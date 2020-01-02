import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        const { list, onPortfolio } = this.props;
        return (
            <div>
                <button onClick={onPortfolio}>click</button>
                {list ? list : null}
            </div>
        )
    }
}

export default Portfolio;