import Context from '../components/Context';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    user: state.loginData.user
});

const ContextContainer = connect(
    mapStateToProps
)(Context);

export default ContextContainer;