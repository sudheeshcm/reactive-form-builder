import React, { Component } from 'react';

export default class Label extends Component {
  constructor() {
    super();
    this.state = {
      ...this.state,
      styles: {
        color: 'grey',
        fontSize: '15px'
      },
      defaultText: 'This is a demo Label'
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
