import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';

import { moveItems } from './../../actions/elementActions';
import { getDraggableItem } from './../../services/itemService';

import './drag-container.scss';

class DragContainer extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    sortItems: PropTypes.func.isRequired
  };

  render() {
    const { items, sortItems } = this.props;

    return (
      <div className="form-builder-draggable-area">
        {items.map((item, i) => getDraggableItem(item, i, null, sortItems))}
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
