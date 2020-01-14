import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationMenu from './navigation';
import Routes from './routes';

class Routing extends Component {
  render() {
    return (
      <Router>
          <NavigationMenu />
          <Routes />
      </Router>
    )
  }
}

export default Routing;