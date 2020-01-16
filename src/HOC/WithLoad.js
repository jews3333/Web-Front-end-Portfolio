import React, { Component } from 'react';
import { connect } from 'react-redux';

const WithLoad = (LoadComponent) => (

    connect(
        mapStateToProps
    )(
        class IsLoad extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    loaded: false
                }
            }

            componentDidMount(){
                if(this.props.list){
                    this.setState({
                        loaded: true
                    })
                }
            }

            componentDidUpdate(prevProps, prevState) {
                if (prevProps.list !== this.props.list) {
                    this.setState({
                        loaded: true
                    });
                }
            }

            render() {
                return (
                    <LoadComponent loaded={this.state.loaded} user={this.props.user} list={this.props.list} logged={this.props.logged} />
                )
            }

        }
    )
)

const mapStateToProps = (state) => ({
    logged: state.loginData.logged,
    user: state.loginData.user,
    list: state.portfolioData.list
});

export default WithLoad;
