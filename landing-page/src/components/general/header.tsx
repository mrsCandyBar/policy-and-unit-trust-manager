import React, { Component } from 'react';
import NavigationMenu from '../../routing/navigation';

class Header extends Component {
  render() {
    return (
      <header>
        <NavigationMenu />
      </header>
    )
  }
}

export default Header;