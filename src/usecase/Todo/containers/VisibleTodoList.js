import { connect } from 'react-redux';
import TodoList from '../TodoList';
import { toggleTodo, VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

// import { bindActionCreators } from 'redux';
// const mapDispatchToProps = dispatch => bindActionCreators({
//   toggleTodo
// }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
