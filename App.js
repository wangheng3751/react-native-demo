import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRoot from './src/appRoot';
import appStore from './src/appStore';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Provider store={appStore}>
            <AppRoot />
        </Provider>
    );
  }
}
