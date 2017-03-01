import React, { Component } from 'react'
import { View, Navigator, Text } from 'react-native'
import { connect } from 'react-redux'
import routes from './routes'
import Home from './screens/Home'
import styles from './App.styles'

class App extends Component {
  constructor(props) {
    super()
    props.nextRoute = props.nextRoute || 0
  }

  componentWillReceiveProps(nextProps) {
    this.currentRoute = this.props.currentRoute || 0
    this.nextRoute = nextProps.currentRoute || 0
  }

  renderScene(route, navigator) {
    if (this.nextRoute != this.currentRoute) {
      route.index = this.nextRoute
    }

    console.log("Route index", route.index)

    if (routes[route.index]) {
      const RouteComponent = routes[route.index].component
      return <RouteComponent />
    }

    return <Home navigator={navigator} />
  }

  render() {
    console.log(this.props)

    return (
      <Navigator
        navigationBar={
          this.props.currentRoute === 0 ? null :
          <Navigator.NavigationBar routeMapper={{
             LeftButton: (route, navigator, index, navState) =>
              { return (route.leftButton); },
             RightButton: (route, navigator, index, navState) =>
               { return (route.rightButton); },
             Title: (route, navigator, index, navState) =>
               { return (<Text>{ route.title }</Text>); },
             }}
             style={styles.navbar}
           />
        }
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom }
        style={{padding: 0}}
      />
    );
  }
}

const mapStateToProps = ({ currentRoute }) => ({ currentRoute })

export default connect(mapStateToProps)(App)
