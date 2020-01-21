import React, { Component } from 'react';
import WithLoad from '../HOC/WithLoad';
import '../styles/Context.scss';
import { database } from '../firebase/init';
import { toastMessage } from '../modules';
import { withRouter, Link } from 'react-router-dom';

class Context extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            email: "",
            message: "",
            date: ""
        }
    }

    UNSAFE_componentWillReceiveProps(){
        if(this.props.user) this.setState({...this.state, email:this.props.user.email});
    }

    onChangeHandler = () => {
        this.setState({
            ...this.state,
            title: document.querySelector("#title").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value

        });
    }

    onSendHandler = () => {

        if(!this.state.title) {
            toastMessage("제목이만이라도...");
            return false;
        } 

        let date = new Date();
        let yy = date.getFullYear();
        let mm = date.getMonth() + 1;
        let dd = date.getDate();

        database.ref("context/"+date.getTime()).set({
            writer: this.props.user.displayName,
            title: this.state.title,
            email: this.state.email,
            message: this.state.message,
            date: `${yy}/${mm}/${dd}`
        }).then(() => {
            toastMessage("메세지 전송 성공!");
            document.querySelector(".component").classList.add("changed");
            setTimeout(() => {
                this.props.history.push("/");
            },500);
        }).catch((err) => {
            console.error(err);
            toastMessage("메세지 전송 실패ㅠㅠ");
        });
        
        
    }

    render(){

        const { loaded, user, admin } = this.props;

        return (
            <div className="component" id="context" data-loaded={loaded}>
                <div>
                    <input type="text" id="title" placeholder="Title" onChange={this.onChangeHandler} />
                </div>
                <div>
                    <input type="text" id="email" placeholder="Email" value={user ? user.email : ""} onChange={this.onChangeHandler} />
                </div>
                <div>
                    <textarea id="message" placeholder="Message" onChange={this.onChangeHandler}></textarea>
                </div>
                <div>
                    <button onClick={user ? this.onSendHandler : () => toastMessage("로그인이 필요합니다!")}>Send</button>
                </div>
                {admin ? <div><Link to="/context/list">List</Link></div> : null}
            </div>
        );
    }
}

export default WithLoad(withRouter(Context));