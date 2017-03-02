import React, { Component } from 'react';
import { AppRegistry, Navigator, Text, TouchableHighlight, Button } from 'react-native';
import styles from './App.styles'
import Drawer from 'react-native-drawer'
import ControlPanel from './components/ControlPanel'

import Page1 from './screens/routing/Page1'
import Page2 from './screens/routing/Page2'
import Page3 from './screens/routing/Page3'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nextRoute: props.nextRoute || 0
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    const currentRoute = this.state.nextRoute
    const nextRoute = nextProps.nextRoute

    if (currentRoute != nextRoute) {
      this.setState({
        nextRoute
      })
    }
  }

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


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      nextRoute: 0
    }
  }

  // Drawer opening and closing functions - See https://github.com/root-two/react-native-drawer
  closeControlPanel() {
    this._drawer.close()
  }

  openControlPanel() {
    this._drawer.open()
  }

  navigate(nextRoute) {
    this.setState({
      nextRoute
    })
  }

  render() {
    return(
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<ControlPanel onNavigate={this.navigate.bind(this)} />}
        tapToClose={true}
        panOpenMask={100}
        panCloseMask={100}
        type={'overlay'}
        open={false}
        openDrawerOffset={100}
        side={'right'}
        >
        <Content nextRoute={this.state.nextRoute} />
      </Drawer>
    )
  }
}


export default App
