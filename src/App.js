import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/Routes';
import Star from './components/Star';

import { database } from './firebase/init';

class App extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  getData = () => {
    try {
      database.ref("list").orderByChild("year").on("value", snapshot => {
        console.log(snapshot.val())
        if (snapshot.val() != null) {
          this.setState({
            list: snapshot.val()
          });
        } else {
          console.log('데이터가 없습니다.')
        }
      });
    } catch (err) {

    }
  }

  componentWillMount(){
    this.getData();
  }

  render() {

    return (
      <div className="App">
        <Star length={100} />
        <Routes />
      </div>
    );
  }
}

export default App;
