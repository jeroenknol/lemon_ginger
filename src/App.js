import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight, Button } from 'react-native';
import styles from './App.styles'
import Layout from './screens/Layout'
import routes from './routes'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class App extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
      showNavbar: false,
    }
  }

  routingChildrenFor(route) {
    return routes[route.index] ?
      [routes[route.index].component] :
      [routes[0].component]
  }

  renderScene(route, navigator) {
    const children = this.routingChildrenFor(route)
    const closeMenu = this.closeMenu.bind(this)
    const hideNavbar = this.hideNavbar.bind(this)
    const showNavbar = this.showNavbar.bind(this)
    const { menuOpen } = this.state

    return <Layout
      navigator={navigator}
      menuOpen={menuOpen}
      closeMenu={closeMenu}
      hideNavbar={hideNavbar}
      showNavbar={showNavbar}
      children={children.map((ChildComponent, index) => {
        const childProps = {
          navigator,
          hideNavbar,
          showNavbar,
        }
        return <ChildComponent key={index} { ...childProps } />
      })} />
  }

  openMenu() {
    this.setState({menuOpen: true})
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  hideNavbar() {
    this.setState({
      showNavbar: false
    })
  }

  showNavbar() {
    this.setState({
      showNavbar: true
    })
  }

  render() {
    const openMenu = this.openMenu.bind(this)
    const { showNavbar } = this.state

    console.log(this.state)

    return (
      <Navigator
        initialRoute={routes[0]}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
          showNavbar ?
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
                { return (<Text style={styles.text}> </Text>); },
              RightButton: (route, navigator, index, navState) =>
                { return (
                  <Text style={styles.text} onPress={openMenu}>
                    <Icon name="hamburger" size={30} color="#4A4A4A" />
                  </Text>); },
              Title: (route, navigator, index, navState) =>
                { return (<Text style={styles.titleText}>Lemon & Ginger</Text>); },
            }}
            style={styles.navigationbar}
          /> : null
        }
      />
    )
  }
}


export default App
