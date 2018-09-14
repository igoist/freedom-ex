import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { log } from '../../../util';

const { dev } = log;

const AddTodo = ({ dispatch }) => {
  let input;

  dev({
    title: 'Todo',
    text: 'container AddTodo dispatch -- ' + typeof (dispatch),
    textColor: 'green'
  });

  return (
    <div>
      <form
        onSubmit={ e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={ node => input = node } />
        <button type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
