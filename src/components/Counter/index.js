const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

import { combineReducers } from 'redux';

export default combineReducers({
  counter
});
