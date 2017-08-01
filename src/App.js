import React, { Component } from 'react';
// import { Provider } from 'react-redux'; *** for store integration
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';

class App extends Component {
  render() {
    return (
      // <Provider>
      <BrowserRouter>
        <Route path="/" component={Home} />
      </BrowserRouter>
      // </Provider>
    );
  }
}

export default App;
