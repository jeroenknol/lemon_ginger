import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import styles from './Filter.styles'

class Filter extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.filter}>[Dropdown]</Text>
          <Button
            title="Filter"
            color="#d8d8d8"
            accessibilityLabel="Filter recipes"
          />
        </View>
    );
  }
}

export default Filter
// connect(null, { navigateTo })(Home)
