import React from 'react';

const Login = ({ onLogin, onLogout }) => {
    return (
        <div>
            <button onClick={onLogin}>로그인</button>
            <button onClick={onLogout}>로그아웃</button>
        </div>
    );
}

Login.defaultProps = {
    onLogin: () => console.warn("onLogin not defined"),
    onLogout: () => console.warn("onLogout not defined")
}

export default Login;