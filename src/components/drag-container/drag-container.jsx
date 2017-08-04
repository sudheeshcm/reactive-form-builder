import React, { Component } from 'react';
import update from 'react/lib/update';
// DropTarget,
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import './drag-container.css';
import BaseItem from './../base-item';

/* const toolTarget = {
  drop() {
  },
};
 */
// @DragDropContext(HTML5Backend)
/* @DropTarget('tool-item', toolTarget, connect => ({
  connectDropTarget: connect.dropTarget(),
})) */
class DragContainer extends Component {
  static propTypes = {
    // connectDropTarget: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = {
      items: [
        {
          id: 1,
          text: 'Write a cool JS library'
        },
        {
          id: 2,
          text: 'Make it generic enough'
        },
        {
          id: 3,
          text: 'Write README'
        },
        {
          id: 4,
          text: 'Create some examples'
        }
      ]
    };
  }

  moveItem(dragIndex, hoverIndex) {
    const { items } = this.state;
    const dragitem = items[dragIndex];

    this.setState(
      update(this.state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragitem]]
        }
      })
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div className="form-builder-draggable-area">
        {items.map((item, i) =>
          <BaseItem
            key={item.id}
            index={i}
            id={item.id}
            text={item.text}
            moveItem={this.moveItem}
          />
        )}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(DragContainer);
