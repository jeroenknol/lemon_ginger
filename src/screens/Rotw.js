import React, { Component } from 'react';
import { Text, ScrollView, View, Image } from 'react-native';
import { connect } from 'react-redux'
import styles from './Rotw.styles'
import fetchRotw from '../actions/recipes/fetchROTW'          // import fetch recipes action

import RecipeItem from '../components/shared/RecipeItem'
import Ingredients from '../components/recipe/Ingredients'
import CookingStep from '../components/recipe/CookingSteps'

class RecipeScreen extends Component {

componentWillMount() {
  console.log("In componentWillMount, let's fire up fetchRecipes")
  this.props.fetchRotw()
  console.log('week', this.props);
}

  renderIngredients(ingredients, index) {
    return <Ingredients key={ index } { ...ingredients } />
  }

  renderCookingStep(step, index) {
    return <CookingStep key={ index } { ...step } />
  }

 // LOADING!
  render() {
    // const { id, title, subtitle, cooking_time, featured, published, week_recipe, intro, categories, ingredients, cooking_steps, photos } = this.props.recipeweek[0]

    console.log('ROTW:',this.props.recipeweek[0])
    if (!this.props.recipeweek[0]) return null

    return (
      <ScrollView style={styles.container}>
        {/* <RecipeItem /> */}
        <Image source={{uri: this.props.recipeweek[0].photos[0].image.iphone6.url}} style={styles.thumb} />
        <Text>{this.props.recipeweek[0].title}</Text>
        <Text>{this.props.recipeweek[0].subtitle}</Text>
        <Text>{this.props.recipeweek[0].cooking_time}</Text>
        { this.props.recipeweek[0].cooking_steps.map(this.renderCookingStep.bind(this)) }
      </ScrollView>
    );
  }
}
const mapStateToProps = ({ recipeweek }) => ({ recipeweek })

export default connect(mapStateToProps, { fetchRotw })(RecipeScreen)
