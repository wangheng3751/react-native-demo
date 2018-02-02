import React, { Component } from 'react';
import LoginComponent from "../components/loginComponent"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from '../authActions';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps,nextState){
        if(nextProps.isLogin){
            alert("登录成功");
        }
    }

    render() {
        return (
            <LoginComponent onLogin={this.props.actions.login}/>
        )
    }  
}

function mapStateToProps(state) {
    return {
        isLogin:state.auth.isLogin
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);