import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { log } from '../../util';

const { dev } = log;

const todos = (state = { data: [], filter: 'SHOW_ALL' }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      dev({
        title: 'Todo',
        text: 'reducer todos add -- ' + JSON.stringify(state),
        textColor: 'green'
      });
      return {
        data: [
          ...state.data,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ],
        filter: state.filter
      };
    case 'TOGGLE_TODO':
      dev({
        title: 'Todo',
        text: 'reducer todos toggle -- ' + JSON.stringify(state),
        textColor: 'green'
      });
      return {
        data: state.data.map(todo =>
          (todo.id === action.id)
            ? { id: todo.id, text: todo.text, completed: !todo.completed}
            : todo
        ),
        filter: state.filter
      };
    case 'SET_VISIBILITY_FILTER':
      return {
        data: state.data,
        filter: action.filter
      };
    default:
      return state;
  }
};

const store = createStore(combineReducers({
  todos
}));

// dev({
//   title: 'Todo',
//   text: 'store -- ' + store,
//   textColor: 'green'
// });

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
