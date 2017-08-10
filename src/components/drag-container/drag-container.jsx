import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';

import DraggableItem from './../form-tools/draggable-item';
import HeaderItem from './../form-tools/header/header';
import LabelItem from './../form-tools/label/label';
import { moveItems } from './../../actions/elementActions';

import './drag-container.scss';

class DragContainer extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    sortItems: PropTypes.func.isRequired
  };

  render() {
    const { items, sortItems } = this.props;

    const getItem = item => {
      switch (item.element) {
        case 'Header':
          return <HeaderItem item={item} />;
        case 'Label':
          return <LabelItem item={item} />;
        default:
          /* TODO ***** REMOVE DEFAULT CASE ***** */
          return <HeaderItem item={item} />;
      }
    };

    return (
      <div className="form-builder-draggable-area">
        {items.map((item, i) =>
          <DraggableItem
            key={item.id}
            index={i}
            itemData={item}
            moveItem={sortItems}
          >
            {getItem(item)}
          </DraggableItem>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.formBuilder.items
});

const mapDispatchToProps = dispatch => ({
  sortItems: (dragIndex, hoverIndex) => {
    dispatch(moveItems(dragIndex, hoverIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DragDropContext(HTML5Backend)(DragContainer)
);
