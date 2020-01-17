import React, { Component } from 'react';
import WithLoad from '../HOC/WithLoad';
import '../styles/Context.scss';
import { database } from '../firebase/init';
import { toast } from '../modules/toastMessage';
import { withRouter } from 'react-router-dom';

class Context extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            email: "",
            message: ""
        }
    }

    UNSAFE_componentWillReceiveProps(){
        if(this.props.user) this.setState({...this.state, email:this.props.user.email});
    }

    onChangeHandler = () => {
        this.setState({
            title: document.querySelector("#title").value,
            email: document.querySelector("#email").value,
            message: document.querySelector("#message").value

        });
    }

    onSendHandler = () => {
        let date = new Date();

        database.ref("context/"+date.getTime()).set({
            writer: this.props.user.displayName,
            title: this.state.title,
            email: this.state.email,
            message: this.state.message
        }).then(() => {
            toast("메세지 전송 성공!");
            document.querySelector(".component").classList.add("changed");
            setTimeout(() => {
                this.props.history.push("/");
            },500);
        }).catch((err) => {
            console.error(err);
            toast("메세지 전송 실패ㅠㅠ");
        });
        
        
    }

    render(){

        const { loaded, user } = this.props;

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
                    <button onClick={user ? this.onSendHandler : () => toast("로그인이 필요합니다!")}>Send</button>
                </div>
            </div>
        );
    }
}

export default WithLoad(withRouter(Context));