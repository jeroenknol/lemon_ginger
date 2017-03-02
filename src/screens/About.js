import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './About.styles'

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          About page
        </Text>
      </View>
    );
  }
}

export default About
// connect(null, { navigateTo })(Home)
