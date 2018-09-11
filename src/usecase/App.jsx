import React from 'react';
import './style.css';
// import Popover from '../components/Popover';
import Popover from '../components/Popover/index.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let target = e.target;

    this.setState(prevState => {

      if (!prevState.target) {
        return {
          target: target
        };
      }
      return {
        target: target === prevState.target ? null : target
      };
    });
    new Popover({
      target
    });
  }

  render() {
    // const { target } = this.state;

    return (
      <div>
        <div className='btn-group'>
          <button className='btn' onClick={ this.handleClick }>A</button>
          <button className='btn' onClick={ this.handleClick }>B</button>
          <button className='btn' onClick={ this.handleClick }>C</button>
        </div>

        {/* {
          target &&
          <Popover target={ target } />
        } */}
      </div>
    );
  }
}

export default App;
