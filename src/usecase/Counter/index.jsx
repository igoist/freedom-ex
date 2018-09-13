import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../components/Counter';


const store = createStore(rootReducer);

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


const NewAppCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppCounter);

const App = () => {
  return (
    <Provider store={ store }>
      <NewAppCounter />
    </Provider>
  );
};

export default App;
