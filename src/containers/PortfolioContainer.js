import Portfolio from '../components/Portfolio';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    list: state.portfolioData.list
});

const PortfolioContainer = connect(
    mapStateToProps
)(Portfolio);

export default PortfolioContainer;