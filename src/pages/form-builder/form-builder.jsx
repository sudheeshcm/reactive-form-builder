import React from 'react';
// , { DraggableCore }
import Draggable from 'react-draggable';

import './form-builder.css';
import Header from './../../components/form-tools/header/header';

class FormBuilder extends React.Component {
  static propTypes = {};

  componentWillMount() {}

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  render() {
    return (
      <div className="form-builder">
        <div className="block form-builder-toolbox-container">
          <div className="form-builder-toolbox">
            <div className="block-heading">Tool Box</div>
            <Header />
          </div>
        </div>
        <div className="block form-builder-draggable-area-container">
          <div className="form-builder-draggable-area">
            <div className="block-heading">Draggable Area</div>
            <Draggable
              axis="both"
              handle=".handle"
              defaultPosition={{ x: 0, y: 0 }}
              position={null}
              grid={[25, 25]}
              onStart={this.handleStart}
              onDrag={this.handleDrag}
              onStop={this.handleStop}
            >
              <div>
                <div className="handle">
                  <Header />
                </div>
              </div>
            </Draggable>
          </div>
        </div>
        <div className="block form-builder-property-window-container">
          <div className="form-builder-property-window">
            <div className="block-heading">Property Window</div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormBuilder;
