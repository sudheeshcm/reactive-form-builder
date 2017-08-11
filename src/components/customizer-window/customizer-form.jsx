import React, { Component } from 'react';
import { Form } from 'react-redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import './customizer-form.css';
import { Fields, DropDownFields } from './customizer-field';
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
        <Fields model="formBuilder.lastSelectedItem.text" text="Text" />
        <Fields
          model="formBuilder.lastSelectedItem.styles.color"
          text="Color"
        />
        <Fields
          model="formBuilder.lastSelectedItem.styles.fontSize"
          text="Font Size"
        />
        <Fields model="formBuilder.lastSelectedItem.height" text="Height" />
        <Fields model="formBuilder.lastSelectedItem.width" text="Width" />
        <Collapsible trigger="Border">
          <DropDownFields
            model="formBuilder.lastSelectedItem.styles.borderStyle"
            text="Border Style"
            options={['solid', 'dashed']}
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.borderRadius"
            text="Border Radius"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.borderWidth"
            text="Border Width"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.borderColor"
            text="Border Color"
          />
        </Collapsible>
        <Collapsible trigger="Margin">
          <Fields
            model="formBuilder.lastSelectedItem.styles.marginTop"
            text="Margin Top"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.marginRight"
            text="Margin Right"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.marginBottom"
            text="Margin Bottom"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.marginLeft"
            text="Margin Left"
          />
        </Collapsible>
        <Collapsible trigger="Padding">
          <Fields
            model="formBuilder.lastSelectedItem.styles.paddingTop"
            text="Padding Top"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.paddingRight"
            text="Padding Right"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.paddingBottom"
            text="Padding Bottom"
          />
          <Fields
            model="formBuilder.lastSelectedItem.styles.paddingLeft"
            text="Padding Left"
          />
        </Collapsible>

        <button className="btn btn-default button submit" type="submit">
          Update
        </button>
        <button className="btn btn-default button" type="reset">
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
