import React, { Component } from 'react';
import { View,  Text, ListView } from 'react-native'
import styles from './RecipeScreen.styles'
// import RecipeItem from '../components/recipeItem'

class Ingredients extends React.Component {

  constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(['Ingredient 1', 'Ingredient 2', 'Ingredient 3']),
    };
  }

  renderRow(data) {
    return (
      <Text>{`\u2022 ${data}`}</Text>
    );
  }

  render() {
    return (
      <ListView
        style={{margin: 20}}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default Ingredients
