import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store'
import App from './src/App'

export default class LemonAndGinger extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('LemonAndGinger', () => LemonAndGinger);