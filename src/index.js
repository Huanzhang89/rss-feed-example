import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './views/App';
import rootReducers from './redux/reducers';

const store = createStore(rootReducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
