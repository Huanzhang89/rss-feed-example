import React from 'react';
import { Provider } from 'react-redux';
import history from './history';
import { Router, Route } from 'react-router-dom';

import store from './store'

import App from './views/App';

const routes = (
  <Route path='/' component={App} />
)

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>
)

export default Routes;
