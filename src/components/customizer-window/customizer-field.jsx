import React, { Component } from 'react';
import { Control, Fieldset } from 'react-redux-form';
import PropTypes from 'prop-types';

export class Fields extends Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { model, text } = this.props;
    return (
      <Fieldset model={model}>
        <label htmlFor={model} className="customizer-form-label">
          {text}:
        </label>
        <Control.text
          model={model}
          id={model}
          className="form-control
          customizer-form-input"
        />
      </Fieldset>
    );
  }
}

export class DropDownFields extends Component {
  static propTypes = {
    model: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired
  };

  render() {
    const { model, text, options } = this.props;
    const selectOptions = options.map(item =>
      <option key={item} value={item}>
        {item}
      </option>
    );
    return (
      <Fieldset model={model}>
        <label htmlFor={model} className="customizer-form-label">
          {text}:
        </label>
        <select className="btn btn-default customizer-form-dropdown">
          {selectOptions}
        </select>
      </Fieldset>
    );
  }
}
