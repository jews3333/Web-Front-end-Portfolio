import Login from '../components/Login';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    logged: state.loginData.logged,
    user: state.loginData.user
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: () => dispatch(actions.login()),
    onLogout: () => dispatch(actions.logout())
});

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;