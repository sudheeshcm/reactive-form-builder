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

class DraggableItem extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    itemData: PropTypes.object.isRequired,
    updateSelection: PropTypes.func.isRequired,
    lastSelectedItem: PropTypes.object.isRequired
  };

  render() {
    const {
      itemData,
      children,
      isDragging,
      connectDragSource,
      connectDropTarget,
      lastSelectedItem
    } = this.props;
    const isActive = lastSelectedItem && lastSelectedItem.id === itemData.id;

    return connectDragSource(
      connectDropTarget(
        <div
          role="presentation"
          className={`sortable-item
            ${isDragging ? 'dragging' : ''}
            ${isActive ? 'selected' : ''}`}
          onClick={() => this.props.updateSelection(itemData)}
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
  updateSelection: item => {
    dispatch(updateSelectedItem(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DragSource('tool-item', itemSource, collect)(
    DropTarget('tool-item', itemTarget, collectDrop)(DraggableItem)
  )
);
