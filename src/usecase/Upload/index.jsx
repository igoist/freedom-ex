import React from 'react';
import Upload from '../../components/Upload';

// import { log } from '../../util/';
// const { l } = log;


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Upload />
      </div>
    );
  }
}

export default App;
