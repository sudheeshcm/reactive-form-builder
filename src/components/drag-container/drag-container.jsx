import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import update from 'immutability-helper';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from 'react-redux';

import './drag-container.css';
import BaseItem from './../form-tools/base-item';
import HeaderItem from './../form-tools/header/header';
import moveItems from './../../actions/elementActions';

// @connect(store => ({
//   items: store.items,
// }))
class DragContainer extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  /* constructor(props) {
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
  } */

  /* moveItem(dragIndex, hoverIndex) {
    const { items } = this.prop;
    const dragItem = items[dragIndex];
    this.setState(
      update(this.state, {
        items: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]]
        }
      })
    );
  } */

  moveItem(dragIndex, hoverIndex) {
    this.props.dispatch(moveItems(dragIndex, hoverIndex));
  }

  render() {
    const { items } = this.props;
    return (
      <div className="form-builder-draggable-area">
        {items.map((item, i) =>
          <BaseItem
            key={item.id}
            index={i}
            id={item.id}
            text={item.text}
            moveItem={this.moveItem}
          >
            <HeaderItem />
          </BaseItem>
        )}
      </div>
    );
  }
}

// DragContainer = connect()(DragContainer);

/* function mapStore(store => {
  items: store.items
});
 */
export default connect()(DragDropContext(HTML5Backend)(DragContainer));
