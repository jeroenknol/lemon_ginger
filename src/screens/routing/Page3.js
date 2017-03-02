import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

class PageThree extends Component {
  navigate(index) {
    this.props.navigator.push({index})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is page 3
        </Text>
        <Button
          onPress={() => this.navigate(0)}
          title="Go to page 1"
          color="#333333"
          accessibilityLabel="Go to page 1"
        />
        <Button
          onPress={() => this.navigate(1)}
          title="Go to page 2"
          color="#333333"
          accessibilityLabel="Go to page 2"
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
    backgroundColor: '#64d66f',
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

export default PageThree
