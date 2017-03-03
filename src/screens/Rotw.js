import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux'
import styles from './Recipe.styles'
import fetchRotw from '../actions/recipes/fetchROTW'          // import fetch recipes action

import RecipeItem from '../components/shared/RecipeItem'
import Ingredients from '../components/recipe/Ingredients'
import CookingSteps from '../components/recipe/CookingSteps'


class RecipeScreen extends Component {

componentWillMount() {
  console.log("In componentWillMount, let's fire up fetchRecipes")
  this.props.fetchRotw()
  console.log('week', this.props);
}

 // LOADING!
  render() {
    console.log('ROTW:',this.props.recipeweek[0])
    if (!this.props.recipeweek[0]) return null

    return (
      <View style={styles.container}>
        {/* <RecipeItem /> */}

        <CookingSteps />
        <Text>{this.props.recipeweek[0].title}</Text>
        <Text>Hallo</Text>

      </View>
    );
  }
}
const mapStateToProps = ({ recipeweek }) => ({ recipeweek })

export default connect(mapStateToProps, { fetchRotw })(RecipeScreen)
