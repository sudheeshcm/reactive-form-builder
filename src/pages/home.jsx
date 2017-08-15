import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

import Dashboard from './dashboard';
import FormBuilder from './form-builder/form-builder';

class Home extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  };
  componentWillMount() {}
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        <div className="home-container">
          <Route path="/" exact component={Dashboard} />
          <Route
            path="/form-builder"
            name="form-builder"
            component={FormBuilder}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
export default Home;
