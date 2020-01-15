import React from 'react';
import '../styles/Login.scss';
import Google from '../images/google.png';
import { toast } from '../modules/toastMessage';

const Login = ({ logged, user, onLogin, onLogout }) => {
    return (
        <div className="login">
            {!logged ? <button data-logged={logged} title="SignIn" onClick={onLogin} onMouseEnter={() => toast("로그인하시겠어요?")} style={{backgroundImage:`url(${Google})`}}>로그인</button> : <button data-logged={logged} title="SignOut" onClick={onLogout} onMouseEnter={() => toast("클릭해서 로그아웃하세요!")} style={user ? {backgroundImage:`url(${user.photoURL})`} : {backgroundImage:`url(${Google})`}}>로그아웃</button>}
        </div>
    );
}

Login.defaultProps = {
    logged: false,
    user: null,
    onLogin: () => console.warn("onLogin not defined"),
    onLogout: () => console.warn("onLogout not defined")
}

export default Login;