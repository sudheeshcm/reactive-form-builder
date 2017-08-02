import React from 'react';
import './form-builder.css';

class FormBuilder extends React.Component {
  static propTypes = {};
  componentWillMount() {}
  render() {
    return (
      <div className="form-builder">
        <div className="block form-builder-toolbox-container">
          <div className="form-builder-toolbox">Tool Box</div>
        </div>
        <div className="block form-builder-draggable-area-container">
          <div className="form-builder-draggable-area">Draggable Area</div>
        </div>
        <div className="block form-builder-property-window-container">
          <div className="form-builder-property-window">Property Window</div>
        </div>
      </div>
    );
  }
}
export default FormBuilder;
