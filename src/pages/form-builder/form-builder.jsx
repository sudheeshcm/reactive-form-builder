import React from 'react';

import './form-builder.css';
import DragContainer from './../../components/drag-container/drag-container';
import Toolbar from './../../components/form-tools/toolbar';

class FormBuilder extends React.Component {
  static propTypes = {};

  componentWillMount() {}

  render() {
    return (
      <div className="form-builder">
        <div className="block form-builder-toolbox-container">
          <div className="form-builder-toolbox">
            <Toolbar />
          </div>
        </div>
        <div className="block form-builder-draggable-area-container">
          <div className="form-builder-header">Draggable Area</div>
          <DragContainer />
        </div>
        <div className="block form-builder-property-window-container">
          <div className="form-builder-property-window">
            <div className="form-builder-header">Property Window</div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormBuilder;
