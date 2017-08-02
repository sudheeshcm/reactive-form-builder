import React from 'react';

class BaseItem extends React.Component {
  constructor() {
    super();
    this.state = {
      styles: {
        color: 'blue',
        'font-size': '16px',
        width: '40px',
        height: '20px'
      }
    };
  }
}
