import React from 'react';

import './drag-container.css';
import Header from './../form-tools/header/header';

class FormBuilder extends React.Component {
  static propTypes = {};

  componentWillMount() {}

  render() {
    return (
      <div className="form-builder-draggable-area">
        <div className="block-heading">Draggable Area</div>
        <Header />
        <Header />
      </div>
    );
  }
}
export default FormBuilder;
