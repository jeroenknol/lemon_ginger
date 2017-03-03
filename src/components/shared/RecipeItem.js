import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native'
import styles from './RecipeItem.styles'
// import RecipeItem from '../components/recipeItem'

class RecipeItem extends Component {
  render() {
    console.log('This propssz in recipe item: ',this.props)
    return (

      <TouchableHighlight underlayColor="#FFFFFF" style={styles.recipeitem}>

        <View>
          <Image source={{uri: 'https://lemon-ginger.herokuapp.com' + this.props.photos[0].image.iphone6.url}} style={styles.thumb} />
          <Text style={styles.text}>{this.props.title}</Text>
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
