import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './AllRecipes.styles'
import RecipeItem from '../components/shared/RecipeItem'
import Filter from '../components/allrecipes/Filter'

class AllRecipes extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Filter />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
        <RecipeItem />
      </ScrollView>
    );
  }
}

export default AllRecipes
// connect(null, { navigateTo })(Home)
