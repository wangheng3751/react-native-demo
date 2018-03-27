import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    BackAndroid,
    StyleSheet
} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginPage from './modules/auth/containers/loginPage';
import HomeIndex from './modules/home/containers/indexPage';
import TabIcon from './common/tabIcon';

class AppRoot extends Component {
    static propTypes = {
        dispatch: PropTypes.func
    }

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
                    createReducer={ this.createReducer.bind(this) }
                    scenes={ scenes }
             >          
            </Router >
        )
    }    
}

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#fff',
        height:64
    },
    tabBarSelectedItemStyle: {
        backgroundColor: '#fff'
    },
    titleStyle: {
        color: '#fff'
    },
})

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
        <Scene key="login" component={LoginPage} title="登录" hideNavBar={true} />
        <Scene key="tabbar"
                initial
                tabs={true}
                tabBarPosition="bottom"
                showLabel={false}
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                titleStyle={styles.titleStyle}>
                <Scene key="home"
                    hideNavBar={true}
                    component={HomeIndex}
                    icon={TabIcon}
                    titleStyle={styles.titleStyle}/>

                <Scene key="movies"
                    hideNavBar={true}
                    component={HomeIndex}      
                    icon={TabIcon}                
                    titleStyle={styles.titleStyle} />

                <Scene key="theaters"
                    hideNavBar={true}
                    component={HomeIndex}                           
                    icon={TabIcon}
                    titleStyle={styles.titleStyle} />

                <Scene key="me"
                    hideNavBar={true}
                    component={LoginPage}                    
                    icon={TabIcon}
                    titleStyle={styles.titleStyle} />
            </Scene>
    </Scene>
)
export default connect()(AppRoot);