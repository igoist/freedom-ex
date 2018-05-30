import React from 'react';
import './style.css';
import Popover from '../Components/Popover';
// import Popover from '../Components/Popover/index.js';


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
    // new Popover({
    //   target
    // });
  }

  render() {
    const { target } = this.state;

    return (
      <div>
        <div class="btn-group">
          <button class='btn' onClick={ this.handleClick }>A</button>
          <button class='btn' onClick={ this.handleClick }>B</button>
          <button class='btn' onClick={ this.handleClick }>C</button>
        </div>

        {
          target &&
          <Popover target={ target } />
        }
      </div>
    );
  }
}

export default App;