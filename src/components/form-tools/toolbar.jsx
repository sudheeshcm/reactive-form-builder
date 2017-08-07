import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ToolbarItem from './toolbar-item';
import { addItem } from './../../actions/elementActions';
import { defaultItems, defaultItemOptions } from './toolbar-item-defaults';

class Toolbar extends Component {
  static propTypes = {
    items: PropTypes.object,
    addItemToStore: PropTypes.func.isRequired
  };
  static defaultProps = {
    items: null
  };

  constructor(props) {
    super(props);

    const items = this.props.items ? this.props.items : defaultItems();

    this.state = {
      items
    };
  }

  onClick(item) {
    const elementOptions = {
      id: this.getRandomInt(),
      element: item.key,
      text: item.name,
      static: item.static,
      required: false
    };

    if (item.static) {
      elementOptions.bold = false;
      elementOptions.italic = false;
    }

    if (item.canHaveAnswer) {
      elementOptions.canHaveAnswer = item.canHaveAnswer;
    }

    if (item.canReadOnly) {
      elementOptions.readOnly = false;
    }

    if (item.canDefaultToday) {
      elementOptions.defaultToday = false;
    }

    if (item.content) {
      elementOptions.content = item.content;
    }

    if (item.href) {
      elementOptions.href = item.href;
    }

    if (item.key === 'Image') {
      elementOptions.src = item.src;
    }

    if (item.key === 'Download') {
      elementOptions.href = item.href;
      elementOptions.file_path = item.file_path;
    }

    if (item.key === 'Range') {
      elementOptions.step = item.step;
      elementOptions.default_value = item.default_value;
      elementOptions.min_value = item.min_value;
      elementOptions.max_value = item.max_value;
      elementOptions.min_label = item.min_label;
      elementOptions.max_label = item.max_label;
    }

    if (item.defaultValue) {
      elementOptions.defaultValue = item.defaultValue;
    }

    if (item.field_name) {
      elementOptions.field_name = item.field_name + 1;
    }

    if (item.label) {
      elementOptions.label = item.label;
    }

    if (item.options) {
      elementOptions.options = defaultItemOptions(elementOptions.element);
    }

    this.props.addItemToStore(elementOptions);
  }

  getRandomInt(min = 5, max = 100) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  render() {
    return (
      <div className="react-formbuilder-toolbar">
        <h4 className="form-builder-header">Toolbox</h4>
        <ul className="tool-box">
          {this.state.items.map(item =>
            <ToolbarItem
              data={item}
              key={item.key}
              onClick={() => this.onClick(item)}
            />
          )}
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItemToStore: item => {
    dispatch(addItem(item));
  }
});

export default connect(null, mapDispatchToProps)(Toolbar);
