import React from 'react';

const MyInput = ({ value, onChange }) => (
  <input value={ value } onChange={onChange} />
);

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.onTextReset = this.onTextReset.bind(this);
    this.state = {
      text: 'mm'
    };
  }

  onTextChange(e) {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  }

  onTextReset() {
    this.setState({ text: '' });
  }

  render() {
    return (
      <div>
        <MyInput value={ this.state.text } onChange={ this.onTextChange } />
        <button onClick={ this.onTextReset }>Reset</button>
      </div>
    );
  }
}

export default Demo;
