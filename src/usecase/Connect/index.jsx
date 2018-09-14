import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counter, NewAppCounter } from '../../components/Counter/';
import { todos, visibilityFilter } from '../Todo/reducers/';
import { AddTodo, VisibleTodoList } from '../Todo/containers/';
import Footer from '../Todo/Footer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  counter,
  todos,
  visibilityFilter
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={ store }>
      <div>
        <NewAppCounter />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
