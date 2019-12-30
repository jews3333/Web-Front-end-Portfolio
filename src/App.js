import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/Routes';
import Star from './components/Star';
import LoginContainer from './containers/LoginContainer';

import * as actions from './actions';
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.onAuthState();
    },5000)
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

const mapStateToProps = (state) => ({
  logged: state.logged,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  onAuthState: () => dispatch(actions.authState())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
