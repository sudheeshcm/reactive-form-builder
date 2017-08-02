import React from 'react';

export default class BaseItem extends React.Component {
  constructor() {
    super();
    this.state = {
      styles: {
        color: 'blue',
        fontSize: '16px',
        width: '150px',
        height: '30px',
        border: 'solid black 1px'
      }
    };
  }
}
