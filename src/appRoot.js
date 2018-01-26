import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
    View,
    Text,
    BackAndroid
} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import LoginPage from './modules/auth/containers/loginPage';

export default class AppRoot extends Component {
    constructor(props) {
        super(props);
    }

    createReducer(params) {
        const defaultReducer = Reducer(params);
        return (state, action) => {
          this.props.dispatch(action);
          return defaultReducer(state, action);
        };
    }

    onExitApp(){
        BackAndroid.exitApp();
        return true;
    }
    render() {
        return (
            <Router onExitApp={this.onExitApp} 
                    createReducer={ this.createReducer }
                    scenes={ scenes }
             >          
            </Router >
        )
    }    
}

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
        <Scene key="login" component={LoginPage} title="登录" hideNavBar={true} initial />
    </Scene>
)