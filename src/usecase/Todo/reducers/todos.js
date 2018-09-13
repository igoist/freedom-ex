import { log } from '../../../util';

const { dev } = log;

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      dev({
        title: 'Todo',
        text: 'reducer todos add -- ' + JSON.stringify(state),
        textColor: 'green'
      });
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      dev({
        title: 'Todo',
        text: 'reducer todos toggle -- ' + JSON.stringify(state),
        textColor: 'green'
      });
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state;
  }
};

export default todos;
