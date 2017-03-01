import React, { Component } from 'react';
import { View, Text } from 'react-native'
import styles from './Filter.styles'
// import RecipeItem from '../components/recipeItem'

class Filter extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>Filter here</Text>
        </View>
    );
  }
}

export default Filter
// connect(null, { navigateTo })(Home)
