import React, { Component } from 'react';
import './App.scss';
import Routes from './routes/Routes';
import Star from './components/Star';
import LoginContainer from './containers/LoginContainer';

import { connect } from 'react-redux';
import { getAuthState, getPortfolioList, MotionLoading } from './modules';

class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     loaded: false
  //   }
  // }

  //사이트 초기 데이터 호출 (필요 데이터 모두 호출)
  componentDidMount(){
    this.props.onAuthState();
    this.props.onPortfolio();
  }

  //데이터 모두 호출에 대한 로딩 및 완료
  // componentDidUpdate(prevProps, prevState){
  //   if(prevProps != this.props){
  //     this.setState({
  //       loaded: true
  //     });
  //   }
  // }

  render() {
    return (
      <div className="App">
        {/* <MotionLoading loaded={this.state.loaded} /> */}
        <MotionLoading />
        <Star length={100} />
        <LoginContainer/>
        <Routes />
      </div>
    );
  }
}

//redux에서 필요 데이터 호출
const mapStateToProps = (state) => ({
  logged: state.loginData.logged,
  user: state.loginData.user,
  list: state.portfolioData.list
});

//redux에서 필요 해들러 호출
const mapDispatchToProps = (dispatch) => ({
  onAuthState: () => getAuthState(dispatch),
  onPortfolio: () => getPortfolioList(dispatch)
})

//사용하기 위한 커넥트
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
