import React, { Component } from 'react';

import Dashboard from './Dashboard';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>RSS example</h1>
        <Dashboard />
      </div>
    );
  }
}
