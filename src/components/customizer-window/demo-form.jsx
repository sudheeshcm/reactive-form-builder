import React, { Component } from 'react';
import { Field, reduxForm, propTypes } from 'redux-form';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const validate = values => {
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

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
  value
}) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      {console.log(input)}
      <input {...input} placeholder={label} type={type} value={value} />
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
  </div>;

renderField.propTypes = {
  ...propTypes
};

class ItemCustomizationForm extends Component {
  static propTypes = {
    ...propTypes
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    // const itemText = selectedItem ? selectedItem.text : '';
    // const itemColor = selectedItem && selectedItem.styles &&
    // selectedItem.styles.color ? selectedItem.styles.color : '';
    return (
      <form onSubmit={handleSubmit}>
        <Field name="text" type="text" component={renderField} label="Text" />
        <Field name="color" type="text" component={renderField} label="Color" />
        <div>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Reset
          </button>
        </div>
      </form>
    );
  }
}

export default connect(
  state => ({
    initialValues: state.formBuilder.lastSelectedItem
  }),
  null
)(
  reduxForm({
    form: 'itemCustomizer',
    enableReinitialize: true,
    validate,
    warn
  })(ItemCustomizationForm)
);
