import React, { Component } from 'react';
import { Popover, OverlayTrigger } from 'react-bootstrap';

import './form-builder.css';
import DragContainer from './../../components/drag-container/drag-container';
import Toolbar from './../../components/form-tools/toolbar';
import CustomizerWindow from './../../components/customizer-window/customizer-window';

class FormBuilder extends Component {
  static propTypes = {};

  componentDidMount() {
    setTimeout(() => {
      this.sortItemOverlay.show();
    }, 6000);
    setTimeout(() => {
      this.sortItemOverlay.hide();
    }, 10000);
  }

  sortItemPopover = (
    <Popover
      id="sort-item-popover"
      placement="top"
      positionLeft={750}
      positionTop={150}
      title="Sort Form Items.!"
    >
      Drag and drop Items in Draggable Area to rearrage Items in your Form.
    </Popover>
  );

  render() {
    return (
      <div className="form-builder">
        <div className="block form-builder-toolbox-container scrollbar-style">
          <div className="form-builder-toolbox">
            <Toolbar />
          </div>
        </div>
        <div className="block form-builder-draggable-area-container scrollbar-style">
          <OverlayTrigger
            ref={overlay => {
              this.sortItemOverlay = overlay;
            }}
            placement="top"
            overlay={this.sortItemPopover}
          >
            <div className="form-builder-header">Form Builder</div>
          </OverlayTrigger>
          <DragContainer />
        </div>
        <div className="block form-builder-property-window-container scrollbar-style">
          <div className="form-builder-property-window">
            <div className="form-builder-header">Customize</div>
            <CustomizerWindow />
          </div>
        </div>
      </div>
    );
  }
}
export default FormBuilder;
