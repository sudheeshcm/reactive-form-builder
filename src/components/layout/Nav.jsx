import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Navbar, Button } from 'react-bootstrap';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { collapsed } = this.state;
    const navClass = collapsed ? 'collapse' : '';
    return (
      <Navbar
        className="navbar navbar-inverse navbar-fixed-top"
        role="navigation"
      >
        <div className="navbar-header">
          <Button
            type="button"
            className="navbar-toggle"
            onClick={() => this.toggleCollapse()}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Button>
        </div>
        <div
          className={`navbar-collapse ${navClass}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                onClick={() => this.toggleCollapse()}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="form-builder"
                activeClassName="active"
                onClick={() => this.toggleCollapse()}
              >
                FORM BUILDER
              </NavLink>
            </li>
          </ul>
        </div>
      </Navbar>
    );
  }
}
Nav.contextTypes = {
  router: PropTypes.object.isRequired
};
