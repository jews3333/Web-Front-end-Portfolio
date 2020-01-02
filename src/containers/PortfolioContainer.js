import Portfolio from '../components/Portfolio';
import * as actions from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    list: state.portfolioData.list
});

const mapDispatchToProps = (dispatch) => ({
    onPortfolio: () => dispatch(actions.portfolio())
});

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);

export default LoginContainer;