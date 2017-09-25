const feedsReducer = (state = {rssFeed:[]}, action) => {
  switch(action.type) {
    case 'ADD_FEED':
      return {
        rssFeed: [action.feedData, ...state.rssFeed],
        currentFeed: action.feedData,
      }

    case 'REMOVE_FEED':
      return {
        rssFeed: state.rssFeed.filter(item => action.feedData !== item),
      }

    case 'SELECT_FEED':
      return {
        ...state,
        currentFeed: action.feedData,
      }
    default:
      return state
  }
}

export default feedsReducer;
