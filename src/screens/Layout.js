import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import ControlPanel from '../components/ControlPanel'

class Layout extends Component {
  navigateTo(route) {
    const { navigator, closeMenu, showNavbar } = this.props
    closeMenu()
    showNavbar()
    navigator.push(route)
  }

  render() {
    const { menuOpen } = this.props
    const menu = <ControlPanel navigateTo={this.navigateTo.bind(this)} />

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={menu}
        tapToClose={true}
        panOpenMask={100}
        panCloseMask={100}
        type={'overlay'}
        open={menuOpen}
        openDrawerOffset={100}
        side={'right'}
      >
        {this.props.children}
      </Drawer>
    );
  }
}

export default Layout
