import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/layout/layout';
import Routes from './routes';

class Routing extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    )
  }
}

export default Routing;