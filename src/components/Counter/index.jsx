import React from 'react';
import { connect } from 'react-redux';

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


const AppCounter = ({ count, increment, decrement }) => {
  return (
    <div>
      <div>{ count }</div>
      <div>
        <button onClick={ increment }>INCREMENT</button>
      </div>
      <div>
        <button onClick={ decrement }>DECREMENT</button>
      </div>
    </div>
  );
};


const mapStateToProps = state => ({
  count: state.counter
});

const mapDispatchToProps = dispatch => ({
  // dispatch: dispatch,
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});


export const NewAppCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCounter);
