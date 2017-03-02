import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight, Button } from 'react-native';
import styles from './App.styles'
import Layout from './screens/Layout'
import routes from './routes'

class App extends Component {
  // Drawer opening and closing functions
  // See: https://github.com/root-two/react-native-drawer
  closeControlPanel() {
    this._drawer.close()
  }

  openControlPanel() {
    this._drawer.open()
  }

  routingChildrenFor(route) {
    return routes[route.index] ?
      [routes[route.index].component] :
      routes[0].component
  }

  renderScene(route, navigator) {
    const children = this.routingChildrenFor(route)
    return <Layout navigator={navigator}
      children={children.map((ChildComponent, index) => {
        return <ChildComponent key={index} navigator={navigator} />
      })} />
  }

  render() {
    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return (<Text style={styles.text}>Cancel</Text>); },
              RightButton: (route, navigator, index, navState) =>
                { return (<Text style={styles.text}>Done</Text>); },
              Title: (route, navigator, index, navState) =>
                { return (<Text style={styles.titleText}>Awesome Nav Bar</Text>); },
            }}
            style={styles.navigationbar}
          />
        }
      />
    )
  }
}


export default App
