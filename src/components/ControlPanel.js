import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';
import styles from './ControlPanel.styles'

class ControlPanel extends Component {
  render() {
    const { navigateTo } = this.props

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lemon & Ginger</Text>
        <Text style={styles.menuitems} onPress={() => navigateTo({ index: 2 })} >Recept van de week</Text>
        <Text style={styles.menuitems} onPress={() => navigateTo({ index: 1 })} >Bekijk alle recepten</Text>
        <Text style={styles.menuitems} onPress={() => navigateTo({ index: 3 })} >Over Roos</Text>
        <Text style={styles.logout}>Log uit</Text>
      </View>
    );
  }
}

export default ControlPanel

// <Button
//   style={styles.menuitems}
//   onPress={() => navigateTo({ index: 2 })}
//   title="Recept van de week"
//   color="#FFF"
//   accessibilityLabel="Go to page 1"
// />
// <Button
//   style={styles.menuitems}
//   onPress={() => navigateTo({ index: 1 })}
//   title="Bekijk alle recepten"
//   color="#FFF"
//   accessibilityLabel="Go to page 2"
// />
// <Button
//   style={styles.menuitems}
//   onPress={() => navigateTo({ index: 3 })}
//   title="Over Roos"
//   color="#FFF"
//   accessibilityLabel="Go to page 3"
// />
