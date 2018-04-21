import React from 'react';
import './App.css';
import A from './__TplTypeA';
import B from './__TplTypeB';
import { Button } from 'antd';
import { Slider } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
    {/* this.loadMap = this.loadMap.bind(this); */}
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <h1>Text!</h1>
        <A />
        <B />
        <Button type="primary">Button</Button>
        <div>
          <Slider defaultValue={30} disabled={disabled} />
          <Slider range defaultValue={[20, 50]} disabled={disabled} />
        </div>
      </div>
    );
  }
}

export default App;
