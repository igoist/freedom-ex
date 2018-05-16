import React from 'react';  

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { testCount, handleState } = this.props;
    handleState({
      testNumber: testCount + 1,
      testText: testCount.toString()
    });
  }

  render() {
    const { testCount } = this.props;

    return (
      <div>
        <p>Count: { testCount }</p>
        <button onClick={ this.handleClick }>Click</button>
        <button onClick={ this.handleClick }>Click</button>
        <button onClick={ this.handleClick }>Click</button>
        <button onClick={ this.handleClick }>Click</button>
        <button onClick={ this.handleClick }>Click</button>
        <button onClick={ this.handleClick }>Click</button>
      </div>
    );
  }
}

export default Counter;
