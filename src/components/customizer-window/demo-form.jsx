/* eslint-disable */
import React, { Component } from 'react';
import { Control, Form, actions } from 'react-redux-form';
import { connect } from 'react-redux';

/* const validate = values => {
  const errors = {};
  if (!values.text) {
    errors.text = 'Required';
  } else if (values.text.length > 15) {
    errors.text = 'Must be 15 characters or less';
  }
  if (!/^[a-zA-Z]*$/i.test(values.color)) {
    errors.color = 'Invalid color';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (!values.color) {
    warnings.color = 'No Color specified';
  }
  return warnings;
};

calss Field extends Component {
  input,
  label,
  type,
  meta: { touched, error, warning },
}) =>

render() {
  return 
}
  <div>
    <label>
      {label}
    </label>
    <div>
      {console.log("Input values: ", input)}
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error &&
          <span>
            {error}
          </span>) ||
          (warning &&
            <span>
              {warning}
            </span>))}
    </div>
  </div>; */

/* renderField.propTypes = {
  ...propTypes
}; */

export default class ItemCustomizationForm extends Component {
  /* static propTypes = {
    ...propTypes
  }; */

  /* componentDidMount() {
    this.handleInitialize();
  } */

  submit(values) {
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }

  /* handleInitialize() {
    const initData = {
      text: this.props.initialValues.text,
      color: this.props.initialValues.color
    };

    this.props.initialize(initData);
  } */

  render() {
    return <Form model="forms" onSubmit={forms => this.submit(forms)} />;
  }
}
/* <label htmlFor="forms.text">Text:</label>
        <Control.text model="forms.text" id="forms.text" />

        <label htmlFor="forms.color">Color:</label>
        <Control.text model="forms.color" id="forms.color" />

        <button type="submit">
          Update
        </button> */

/*  export default connect(
  state => ({
    initialValues: state.formBuilder.lastSelectedItem
  }), null)(ItemCustomizationForm); */
