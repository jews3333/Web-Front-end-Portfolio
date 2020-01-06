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

            componentDidUpdate(prevProps, prevState) {
                if (prevProps != this.props) {
                    this.setState({
                        loaded: true
                    });
                }
            }

            render() {
                return (
                    <LoadComponent loaded={this.state.loaded} />
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

export default WithLoad
