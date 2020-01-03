import Portfolio from '../components/Portfolio';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    list: state.portfolioData.list
});

const LoginContainer = connect(
    mapStateToProps
)(Portfolio);

export default LoginContainer;