import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/Routes';
import Star from './components/Star';
import LoginContainer from './containers/LoginContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }

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

export default App;
