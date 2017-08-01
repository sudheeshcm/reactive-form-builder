import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Custom Form Builder</h2>
        </div>
        <p className="App-intro">
          React based dynamic form builder application that lets you create a dynamic
          form with custom <code>buttons, text boxes</code> and other tools.
          <br />
          App provides a drag and drop environment to style your own form with customizable
          properties for each tool you add to the form.
        </p>
      </div>
    );
  }
}

export default App;
