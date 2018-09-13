import React from 'react';
import Footer from './Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { log } from '../../util';

const { dev } = log;

dev({
  title: 'Todo',
  text: 'rootReducer -- ' + typeof rootReducer,
  textColor: 'green'
});

const store = createStore(rootReducer);

dev({
  title: 'Todo',
  text: 'store -- ' + store,
  textColor: 'green'
});

const App = () => (
  <Provider store={ store }>
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  </Provider>
);

export default App;
