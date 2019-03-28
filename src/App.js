import React, { Component } from 'react';
import store from './store';
import Route from './Routes';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Provider store={store}>
        <Route />
      </Provider>
      </div>
    );
  }
}

export default App;
