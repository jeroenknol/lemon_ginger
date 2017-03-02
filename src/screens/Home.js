import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'                        // import connect
import fetchRecipes from '../actions/recipes/fetch'          // import fetch recipes action
import Login from './Login'
import styles from './Home.styles'

class Home extends Component {
  navigate(index) {
    console.log(this.props.navigator)
    this.props.navigator.push({index})
  }
  componentWillMount() {
    console.log("In componentWillMount, let's fire up fetchRecipes")
    this.props.fetchRecipes()
  }


  render() {
    console.log('This propz0rs',this.props)
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
        <Button
          onPress={() => this.navigate(1)}
          title="Log in"
          color="#333333"
          accessibilityLabel="Log in"
        />
      </View>
    );
  }
}


export default connect(null, { fetchRecipes })(Home)      // fetchRecipes available as props
