import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux'                        // import connect
import fetchRecipes from '../actions/recipes/fetch'          // import fetch recipes action
import Login from './Login'
import styles from './Home.styles'

class Home extends Component {
  componentDidMount() {
    this.props.hideNavbar()
  }

  navigate(index) {
    const { showNavbar, navigator } = this.props
    showNavbar()
    navigator.push({index})
  }
  componentWillMount() {
    console.log("In componentWillMount, let's fire up fetchRecipes")
    this.props.fetchRecipes()
  }


  render() {
    console.log('This propz0rs',this.props)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lemon{'\n'}&{'\n'}Ginger</Text>
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
          color="#FBDE5B"
          accessibilityLabel="Log in"
        />
      </View>
    );
  }
}

// Line 45 converts state to props for recipes, mapStateToProps insterted into connect on line 48. 
const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps, { fetchRecipes })(Home)
