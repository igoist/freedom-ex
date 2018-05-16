import React from 'react';
import './App.css';
import A from './__TplTypeA';
import B from './__TplTypeB';
import TestCounter from './TestCounter';
import { Button } from 'antd';
import { Slider } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      testNumber: 0,
      testText: '',
    };
    {/* this.loadMap = this.loadMap.bind(this); */}
    this.handleState = this.handleState.bind(this);
  }

  handleState(newStateObj) {
    this.setState(newStateObj);
  }

  render() {
    console.log(this.state);
    const { disabled, testNumber } = this.state;

    return (
      <div>
        <h1>Text!</h1>
        <A />
        <B />
        <Button type="primary">Button</Button>
        <div>
          <Slider defaultValue={ 30 } disabled={ disabled } />
          <Slider range defaultValue={ [20, 50] } disabled={ disabled } />
        </div>
        <TestCounter testCount={ testNumber } handleState={ this.handleState } />
      </div>
    );
  }
}

export default App;
