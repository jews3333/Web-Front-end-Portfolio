import React, { Component } from 'react';
import WithLoad from '../HOC/WithLoad';
import { database } from '../firebase/init';
import '../styles/ContextList.scss';

class ContextList extends Component {

    constructor(props){
        super(props);
        this.state = {
            contextList: null
        }
    }

    componentDidMount(){
        database.ref("context").on("value", (snapshot) => {
            const contexts = snapshot.val();
            const contextList = new Array();
            if(contexts) {
                Object.keys(contexts).map((id) => {
                    contextList[id] = contexts[id];
                });

                this.setState({
                    contextList: contextList
                });
            }
        });
    }

    render(){

        const { loaded } = this.props;
        const { contextList } = this.state;

        return (
            <div className="component" id="contextList" data-loaded={loaded}>
                {contextList ? Object.keys(contextList).map((id, index) => (
                    <div key={index} className="contextListItem">
                        <div className="head">
                            <h5 className="title">{contextList[id].title}</h5>
                            <p className="date">{contextList[id].date}</p>
                            <p className="writer">{contextList[id].writer}</p>
                        </div>
                        <div className="body">{contextList[id].message}</div>
                    </div>
                )) : null}
            </div>
        );
    }
}

export default WithLoad(ContextList);