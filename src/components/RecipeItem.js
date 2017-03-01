import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native'
import styles from './RecipeItem.styles'
// import RecipeItem from '../components/recipeItem'

class RecipeItem extends Component {
  render() {
    return (

      <TouchableHighlight underlayColor="#FFFFFF" style={styles.recipeitem}>
        <View>
          <Image source={{uri: 'https://placehold.it/480/ff3333/ffffff?text=:{)'}} style={styles.thumb} />
          <Text style={styles.text}>Banana pancakes</Text>
        </View>
      </TouchableHighlight>

    );
  }
}

export default RecipeItem
// connect(null, { navigateTo })(Home)
