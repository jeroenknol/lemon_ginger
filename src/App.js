import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight } from 'react-native';

import Page1 from './screens/routing/Page1'
import Page2 from './screens/routing/Page2'
import Page3 from './screens/routing/Page3'

class App extends Component {
  renderScene(route, navigator) {
    if (route.index === 0) {
      return <Page1 navigator={navigator} />
    } else if (route.index === 1) {
      return <Page2 navigator={navigator} />
    } else if (route.index === 2) {
      return <Page3 navigator={navigator} />
    }
  }

  render() {
    const routes = [
      { name: 'pageone', title: 'Page One', index: 0, leftButton: null, rightButton: null, component: Page1 },
      { name: 'pagetwo', title: 'Page Two', index: 1, leftButton: null, rightButton: null, component: Page2 },
      { name: 'pagethree', title: 'Page Three', index: 2, leftButton: null, rightButton: null, component: Page3 },
    ];


    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
      />
    )
  }
}

export default App
