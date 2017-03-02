import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class ControlPanel extends Component {
  render() {
    const { navigateTo } = this.props

    return (
      <View style={styles.container}>
        <Button
          style={styles.welcome}
          onPress={() => navigateTo({ index: 0 })}
          title="Page 1"
          color="#333333"
          accessibilityLabel="Go to page 1"
        />
        <Button
          style={styles.welcome}
          onPress={() => navigateTo({ index: 1 })}
          title="Page 2"
          color="#333333"
          accessibilityLabel="Go to page 2"
        />
        <Button
          style={styles.welcome}
          onPress={() => navigateTo({ index: 2 })}
          title="Page 3"
          color="#333333"
          accessibilityLabel="Go to page 3"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default ControlPanel
