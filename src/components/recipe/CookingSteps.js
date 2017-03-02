import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native'
import styles from './RecipeScreen.styles'
// import RecipeItem from '../components/recipeItem'

class RecipeItem extends Component {
  render() {
    return (
        <View>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam finibus enim nisi, ac pellentesque urna porttitor eget.</Text>
        </View>
    );
  }
}

export default RecipeItem
// connect(null, { navigateTo })(Home)
