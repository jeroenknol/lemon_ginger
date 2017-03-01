import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './AllRecipes.styles'
import RecipeItem from '../components/RecipeItem'
import Filter from '../components/Filter'

class AllRecipes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Filter />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
      </View>
    );
  }
}

export default AllRecipes
// connect(null, { navigateTo })(Home)
