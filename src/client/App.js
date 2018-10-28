import React, { Component } from 'react';
import './app.css';


import store from './redux/store'
import { Provider } from 'react-redux'

import AppRoutes from './app.routes'

export default class App extends Component {

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() { 
    return (
      <div>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </div>
    );
  }
}
