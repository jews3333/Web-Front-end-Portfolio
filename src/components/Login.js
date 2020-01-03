import React from 'react';
import '../styles/Login.scss';
import Google from '../images/google.png';


const Login = ({ logged, user, onLogin, onLogout }) => {
    return (
        <div className="login">
            {!logged ? <button data-logged={logged} onClick={onLogin} style={{backgroundImage:`url(${Google})`}}>로그인</button> : <button data-logged={logged} onClick={onLogout} style={user ? {backgroundImage:`url(${user.photoURL})`} : {backgroundImage:`url(${Google})`}}>로그아웃</button>}
        </div>
    );
}

Login.defaultProps = {
    logged: false,
    onLogin: () => console.warn("onLogin not defined"),
    onLogout: () => console.warn("onLogout not defined")
}

export default Login;