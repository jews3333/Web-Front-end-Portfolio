import React from 'react';
import '../styles/Login.scss';


const Login = ({ logged, onLogin, onLogout }) => {
    return (
        <div className="login">
            {!logged ? <button onClick={onLogin}>로그인</button> : <button onClick={onLogout}>로그아웃</button>}
        </div>
    );
}

Login.defaultProps = {
    onLogin: () => console.warn("onLogin not defined"),
    onLogout: () => console.warn("onLogout not defined")
}

export default Login;