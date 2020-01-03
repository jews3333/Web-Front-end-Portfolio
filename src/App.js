import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/Routes';
import Star from './components/Star';
import LoginContainer from './containers/LoginContainer';

import * as actions from './actions';
import { connect } from 'react-redux';
import { auth, database } from './firebase/init';

class App extends Component {

  componentDidMount(){ //임시 로그인 상태관리 => 추후 수정예정
    this.props.onAuthState();
    this.props.onPortfolio();
  }

  render() {
    return (
      <div className="App">
        <Star length={100} />
        <LoginContainer/>
        <Routes />
      </div>
    );
  }
}

const getAuthState = (dispatch) => {
  auth().onAuthStateChanged((result) => {
    let user = result ? result : null;
    
    console.log(result);

    dispatch(actions.authState(user));
  })
}

const getPortfolioList = (dispatch) => {
  database.ref("list").on("value", snapshot => {
      let getList = snapshot.val();
      let portfolioList = getList ? Object.keys(getList).map(id => ({id, ...getList[id]})) : [];

      console.log(portfolioList);

      dispatch(actions.portfolio(portfolioList));
  });
}

const mapStateToProps = (state) => ({
  logged: state.loginData.logged,
  user: state.loginData.user,
  list: state.portfolioData.list
});

const mapDispatchToProps = (dispatch) => ({
  onAuthState: () => getAuthState(dispatch),
  onPortfolio: () => getPortfolioList(dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
