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
          <View style={styles.buttons}>
            <Image
              style={{width: 20, height: 20}}
              source={{uri: 'https://images-na.ssl-images-amazon.com/images/G/01/Shopbop/p/pcs/shopbop/images/favorite_empty_1-0.png'}}/>
          </View>
        </View>
      </TouchableHighlight>

    );
  }
}

export default RecipeItem
// connect(null, { navigateTo })(Home)
