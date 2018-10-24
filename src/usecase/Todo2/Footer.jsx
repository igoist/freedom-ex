import React from 'react';
import { connect } from 'react-redux';

const Link = ({ active, children, onClick }) => (
  <button
    onClick={ onClick }
    disabled={ active }
    style={{ marginLeft: '4px' }}
  >
    { children }
  </button>
);

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.todos.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: ownProps.filter
  })
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={ 'SHOW_ALL' }>
      All
    </FilterLink>
    <FilterLink filter={ 'SHOW_ACTIVE' }>
      Active
    </FilterLink>
    <FilterLink filter={ 'SHOW_COMPLETED' }>
      Completed
    </FilterLink>
  </div>
);

export default Footer;
