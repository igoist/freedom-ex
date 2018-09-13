import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer, { NewAppCounter } from '../../components/Counter/';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={ store }>
      <NewAppCounter />
    </Provider>
  );
};

export default App;
