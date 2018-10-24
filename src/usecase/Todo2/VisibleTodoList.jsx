import React from 'react';
import { connect } from 'react-redux';


const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={ onClick }
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    { text }
  </li>
);


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
};

const mapStateToProps = state => {
  return ({
    todos: getVisibleTodos(state.todos.data, state.todos.filter)
  });
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch({ type: 'TOGGLE_TODO', id})
});


const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {
      todos.length > 0 && todos.map(todo =>
        <Todo
          key={ todo.id }
          { ...todo }
          onClick={ () => toggleTodo(todo.id) }
        />
      )
    }
  </ul>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
