import { combineReducers } from 'redux'
import rssFeeds from './feeds';
const rootReducer = combineReducers({
  rssFeeds,
})

export default rootReducer;
