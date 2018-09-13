import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../components/Counter';
import { log } from '../../util';

const { dev } = log;

// dev({
//   title: 'Counter',
//   text: String(counter)
// });

const store = createStore(rootReducer);
dev({
  title: 'Counter',
  text: 'store -- ' + store,
  textColor: 'green'
});
console.log(store);
console.log(store.getState());

const AppCounter = (state) => {
  console.log(state);
  const { count, dispatch } = state;
  dev({
    title: 'Counter',
    text: 'count -- ' + count,
    textColor: 'green'
  });
  dev({
    title: 'Counter',
    text: 'dispatch -- ' + dispatch,
    textColor: 'green'
  });

  return (
    <div>
      <div>{ count }</div>
      <div>
        <button onClick={ () => dispatch({ type: 'INCREMENT' }) }>INCREMENT</button>
      </div>
      <div>
        <button onClick={ () => dispatch({ type: 'DECREMENT' }) }>DECREMENT</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  dev({
    title: 'Counter',
    text: 'mapStateToProps -- ' + state,
    textColor: 'green'
  });
  return ({
    count: state.counter
  });
};
// const mapStateToProps = state => ({
//   count: state.counter
// });

// const mapDispatchToProps = dispatch => ({
//   // toggleTodo: id => dispatch(toggleTodo(id))
//   dispatch: dispatch
// });


const NewAppCounter = connect(
  mapStateToProps
  // mapDispatchToProps
)(AppCounter);

console.log(NewAppCounter);

const App = () => {
  return (
    <Provider store={ store }>
      <NewAppCounter />
    </Provider>
  );
};

export default App;
