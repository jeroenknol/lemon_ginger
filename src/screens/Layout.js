import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import ControlPanel from '../components/ControlPanel'

class Layout extends Component {
  navigateTo(route) {
    this.props.navigator.push(route)
  }

  render() {
    const navigator = this.props
    const menu = <ControlPanel navigateTo={this.navigateTo.bind(this)} />

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={menu}
        tapToClose={true}
        panOpenMask={100}
        panCloseMask={100}
        type={'overlay'}
        open={false}
        openDrawerOffset={100}
        side={'right'}
      >
        {this.props.children}
      </Drawer>
    );
  }
}

export default Layout
