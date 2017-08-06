import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import PropTypes from 'prop-types';

import BaseItem from './../form-tools/base-item';
import HeaderItem from './../form-tools/header/header';
import { moveItems } from './../../actions/elementActions';

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
        {items.map((item, i) =>
          <BaseItem
            key={item.id}
            index={i}
            id={item.id}
            text={item.text}
            moveItem={sortItems}
          >
            <HeaderItem />
          </BaseItem>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  sortItems: (dragIndex, hoverIndex) => {
    dispatch(moveItems(dragIndex, hoverIndex));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(
  DragDropContext(HTML5Backend)(DragContainer)
);
