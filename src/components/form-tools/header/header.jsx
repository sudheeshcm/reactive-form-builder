import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      styles: {
        color: 'grey',
        fontSize: '20px'
      },
      defaultText: 'Header Text'
    };
  }

  render() {
    const { item } = this.props;
    return (
      <div style={item.styles || this.state.styles}>
        {item.text || this.state.defaultText}
      </div>
    );
  }
}
