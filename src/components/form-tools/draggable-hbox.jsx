import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import { DragSource, DropTarget } from 'react-dnd';

import './draggable-hbox.css';
import {
  updateSelectedItem,
  moveHorizontalItems
} from './../../actions/elementActions';
import { getDraggableItem } from './../../services/itemService';

const itemSource = {
  beginDrag(props) {
    return {
      id: props.itemData.id,
      index: props.index
    };
  }
};

const itemTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    // eslint-disable-next-line
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveItem(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

function collectDrop(connectToDrop, monitor) {
  return {
    connectDropTarget: connectToDrop.dropTarget(),
    isOver: monitor.isOver()
  };
}

function collect(connectToDrag, monitor) {
  return {
    connectDragSource: connectToDrag.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class DraggableHBox extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    itemData: PropTypes.object.isRequired,
    updateSelection: PropTypes.func.isRequired,
    lastSelectedItem: PropTypes.object.isRequired,
    sortHorizontalItems: PropTypes.func.isRequired
  };

  render() {
    const {
      itemData,
      isDragging,
      connectDragSource,
      connectDropTarget,
      lastSelectedItem,
      updateSelection,
      sortHorizontalItems
    } = this.props;
    const isActive = lastSelectedItem && lastSelectedItem.id === itemData.id;
    const parentId = itemData.id;

    return connectDragSource(
      connectDropTarget(
        <div
          role="presentation"
          style={itemData.styles}
          className={`sortable-hbox sortable-item
            ${isDragging ? 'dragging' : ''}
            ${isActive ? 'selected' : ''}`}
          onClick={$event => updateSelection(itemData, $event)}
        >
          <div className="demo-hbox-label">Demo HBox</div>
          {itemData.children && itemData.children.length
            ? itemData.children.map((item, i) =>
                getDraggableItem(item, i, parentId, sortHorizontalItems)
              )
            : null}
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  lastSelectedItem: state.formBuilder.lastSelectedItem
});

const mapDispatchToProps = dispatch => ({
  updateSelection: (item, e) => {
    dispatch(updateSelectedItem(item));
    e.stopPropagation();
  },
  sortHorizontalItems: (parentId, dragIndex, hoverIndex) => {
    dispatch(moveHorizontalItems(parentId, dragIndex, hoverIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DragSource('tool-item', itemSource, collect)(
    DropTarget('tool-item', itemTarget, collectDrop)(DraggableHBox)
  )
);
