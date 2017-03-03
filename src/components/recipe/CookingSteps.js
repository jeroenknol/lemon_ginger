import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native'
import styles from './RecipeScreen.styles'
// import RecipeItem from '../components/recipeItem'

class CookingStep extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
      </View>
    );
  }
}

export default CookingStep
// connect(null, { navigateTo })(Home)
