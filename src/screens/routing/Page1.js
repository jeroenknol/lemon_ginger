import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
} from 'react-native';

class PageOne extends Component {
  navigate(index) {
    this.props.navigator.push({index})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is page 1
        </Text>
        <Button
          onPress={() => this.navigate(1)}
          title="Go to page 2"
          color="#333333"
          accessibilityLabel="Go to page 2"
        />
        <Button
          onPress={() => this.navigate(2)}
          title="Go to page 3"
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
    backgroundColor: '#d7bf57',
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

export default PageOne
