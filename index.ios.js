/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AboutScreen from './src/screens/About'
import AllRecipesScreen from './src/screens/AllRecipes'
import Login from './src/screens/Login'
import RecipeScreen from './src/screens/Recipe'

export default class LemonAndGinger extends Component {
  render() {
    return (
      <View>
        {/* <AboutScreen /> */}
        {/* <RecipeScreen /> */}
        <AllRecipesScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('LemonAndGinger', () => LemonAndGinger);
