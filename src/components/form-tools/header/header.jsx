import React from 'react';

import BaseItem from './../../base-item';

export default class Header extends BaseItem {
  constructor() {
    super();
    console.log('state: ', this.state);
    this.state = {
      ...this.state,
      styles: {
        ...this.state.styles,
        color: 'green',
        fontSize: '20px'
      },
      defaultText: 'Header'
    };
    console.log('final state: ', this.state);
  }

  render() {
    return (
      <div style={this.state.styles}>
        {this.state.defaultText}
      </div>
    );
  }
}
