import React, { Component } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native'

class Title extends Component {

  render() {
    return (
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{this.props.content}</Text>
    )
  }
}

export default Title
