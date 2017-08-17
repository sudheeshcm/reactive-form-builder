import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd';
import { connect } from 'react-redux';

import { updateSelectedItem } from './../../actions/elementActions';

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

    // Get horizontall middle
    const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientX = clientOffset.x - hoverBoundingRect.left;

    // Only perform the move when the mouse has crossed half of the items length
    // When dragging to left, only move when the cursor is to the left of 50%
    // When dragging to right, only move when the cursor is to the right of 50%

    // Dragging right
    if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
      return;
    }

    // Dragging left
    if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
      return;
    }

    // Time to actually perform the action - #passes parent id as parentId
    props.moveHorizontalItem(props.parentId, dragIndex, hoverIndex);

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

class HDraggableItem extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    itemData: PropTypes.object.isRequired,
    updateSelection: PropTypes.func.isRequired,
    lastSelectedItem: PropTypes.object.isRequired,
    dimensions: PropTypes.object.isRequired
  };

  render() {
    const {
      itemData,
      children,
      isDragging,
      connectDragSource,
      connectDropTarget,
      lastSelectedItem,
      dimensions
    } = this.props;
    const isActive = lastSelectedItem && lastSelectedItem.id === itemData.id;

    return connectDragSource(
      connectDropTarget(
        <div
          role="presentation"
          className={`sortable-item horizontal-item
            ${isDragging ? 'dragging' : ''}
            ${isActive ? 'selected' : ''}`}
          onClick={$event => this.props.updateSelection(itemData, $event)}
          style={dimensions}
        >
          {children}
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DragSource('horizontal-tool-item', itemSource, collect)(
    DropTarget('horizontal-tool-item', itemTarget, collectDrop)(HDraggableItem)
  )
);
