import React from 'react';
import WithLoad from '../HOC/WithLoad';

const Context = ({user}) => {
    console.log(user);
    return (
        <div className="component" id="context" data-loaded={true}>
            <div className="form">
                <div>
                    <input type="text" id="title" placeholder="Title" />
                </div>
                <div>
                    <input type="text" id="email" placeholder="Email"/>
                </div>
                <div>
                    <input type="text" id="message" placeholder="Message"/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default WithLoad(Context);