import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      ...this.state,
      styles: {
        color: 'green',
        fontSize: '20px',
        width: '200px'
      },
      defaultText: 'Header'
    };
  }

  render() {
    return (
      <div style={this.state.styles}>
        {this.state.defaultText}
      </div>
    );
  }
}
