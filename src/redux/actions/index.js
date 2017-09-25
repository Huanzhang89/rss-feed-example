import 'whatwg-fetch';

export const fetchFeed = (url) => (dispatch) => {
  return fetch(url)
    .then(res => res.json())
    .then(data => dispatch(addFeed(data)))
};

export const getSelectedFeed = (data) => (dispatch) => {
  return dispatch(selectFeed(data));
}
export const selectFeed = (feedData) => ({
  type: 'SELECT_FEED',
  feedData,
})
export const addFeed = (feedData) => ({
  type: 'ADD_FEED',
  feedData,
});

export const removeFeed = (feedData) => ({
  type: 'REMOVE_FEED',
  feedData,
})
