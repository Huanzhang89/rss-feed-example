import { applyMiddleware, createStore } from 'redux'

// redux middleware
import { createLogger } from 'redux-logger'
import reduxThunk from 'redux-thunk'

import rootReducer from './redux/reducers';
import { saveState, loadState } from './localStorage';

const persistedState = loadState();

const logger = createLogger()
const middleware = [reduxThunk, logger]

const store = createStore(rootReducer, persistedState, applyMiddleware(...middleware));

store.subscribe(()=>{
  saveState(store.getState());
});

export default store;
