import React, { Component } from 'react';
import { Control, Form } from 'react-redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './customizer-form.scss';
import { updateInList } from './../../actions/elementActions';

class ItemCustomizationForm extends Component {
  static propTypes = {
    updateItemInList: PropTypes.func.isRequired
  };

  isRequired(val) {
    return val && val.length;
  }
  isLonger(len, val) {
    return val && val.length && val.length > len;
  }
  isNumber(val) {
    return !isNaN(Number(val));
  }

  submit(values) {
    // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    // const isValid = this.isValidItem(values); // Validate **** TODO *****
    this.props.updateItemInList(values);
  }

  render() {
    return (
      <Form
        model="formBuilder.lastSelectedItem"
        onSubmit={customizerForm => this.submit(customizerForm)}
        className="customizer-form"
      >
        <label htmlFor=".text" className="customizer-form-label">
          Text:
        </label>
        <Control.text
          model=".text"
          id=".text"
          className="form-control
          customizer-form-input"
        />

        <label htmlFor=".styles.color" className="customizer-form-label">
          Color:
        </label>
        <Control.text
          model=".styles.color"
          id=".styles.color"
          className="form-control customizer-form-input"
        />
        <br />
        <button className="btn btn-default submit" type="submit">
          Update
        </button>
        <button className="btn btn-default" type="reset">
          Reset
        </button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateItemInList: values => {
    dispatch(updateInList(values));
  }
});

export default connect(null, mapDispatchToProps)(ItemCustomizationForm);
