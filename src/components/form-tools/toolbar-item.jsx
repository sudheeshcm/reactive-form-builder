import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
  static propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
  };

  static defaultProps = {
    data: null,
    onClick: null
  };

  render() {
    return (
      <li className="item-list-li">
        <button
          className={`tool-item ${this.props.data.disabled ? 'disabled' : ''}`}
          onClick={this.props.onClick}
          disabled={this.props.data.disabled}
        >
          <span className="tool-item-icon">
            <i className={this.props.data.icon} />
          </span>
          {this.props.data.name}
        </button>
      </li>
    );
  }
}
