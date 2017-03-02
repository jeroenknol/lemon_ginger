import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './Login'
import styles from './Home.styles'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Login />
      </View>
    );
  }
}

export default Home
// connect(null, { navigateTo })(Home)
