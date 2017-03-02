import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './Recipe.styles'

import RecipeItem from '../components/shared/RecipeItem'
import Ingredients from '../components/recipe/Ingredients'
import CookingSteps from '../components/recipe/CookingSteps'

class RecipeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RecipeItem />
        <Ingredients />
        <CookingSteps />
        <CookingSteps />
        <Text>Hallo</Text>

      </View>
    );
  }
}

export default RecipeScreen
// connect(null, { navigateTo })(Home)
