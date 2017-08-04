import React from 'react';
// , { DraggableCore }
import Draggable from 'react-draggable';

import './form-builder.css';
import Header from './../../components/form-tools/header/header';

class FormBuilder extends React.Component {
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      overlaps: false
    };
  }

  componentWillMount() {}

  eventLogger = (e: MouseEvent, data: Object) => {
    console.log('Event: ', e);
    console.log('Data: ', data);
  };

  checkIfOverlap = () => {
    console.log('checkIfOverlap called');
    const rect1 = this.rect1.getBoundingClientRect();
    const rect2 = this.rect2.getBoundingClientRect();
    console.log('rect1', rect1);
    console.log('rect2', rect2);
    const overlaps = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
    this.setState({ overlaps });
  };

  handleStop = () => {
    console.log('handleStop Called');
    this.checkIfOverlap();
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
                <div
                  className="handle"
                  ref={elem => {
                    this.rect1 = elem;
                  }}
                >
                  <Header />
                </div>
              </div>
            </Draggable>
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
                <div
                  className="handle"
                  ref={elem => {
                    this.rect2 = elem;
                  }}
                >
                  <Header />
                </div>
              </div>
            </Draggable>
          </div>
          <input
            type="button"
            className="btn btn-primary"
            onClick={() => {
              this.checkIfOverlap();
            }}
            value="Check"
          />
          <div>
            Value: {this.state.overlaps.toString()}
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
