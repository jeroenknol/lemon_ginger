import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './AllRecipes.styles'
import RecipeItem from '../components/shared/RecipeItem'
import Filter from '../components/allrecipes/Filter'

class AllRecipes extends Component {

  renderRecipe(recipe, index) {
    return <RecipeItem key={ index } { ...recipe } />
  }

  render() {
    console.log('Props in allrecipesscreen:', this.props)
    return (
      <ScrollView style={styles.container}>
        <Filter />
        <View>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </View>

      </ScrollView>
    );
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

export default connect(mapStateToProps)(AllRecipes)
