import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './customizer-window.scss';
import ItemCustomizationForm from './demo-form';

class CustomizerWindow extends Component {
  static propTypes = {
    lastSelectedItem: PropTypes.object
  };

  static defaultProps = {
    lastSelectedItem: null
  };

  render() {
    const { lastSelectedItem } = this.props;

    const submit = values => {
      // print the form values to the console
      console.log(values);
    };

    return (
      <div className="customizer-window-container">
        {lastSelectedItem.text}
        <ItemCustomizationForm onSubmit={submit} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastSelectedItem: state.formBuilder.lastSelectedItem
});

/* const mapDispatchToProps = dispatch => ({
  sortItems: (dragIndex, hoverIndex) => {
    dispatch(moveItems(dragIndex, hoverIndex));
  }
}); */

export default connect(mapStateToProps, null)(CustomizerWindow);
