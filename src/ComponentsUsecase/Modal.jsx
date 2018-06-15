import React from 'react';
import './style.css';
import { Modal } from 'antd';
const confirm = Modal.confirm;

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <div class="btn-group">
          <button class='btn' onClick={ showDeleteConfirm }>A</button>
          <button class='btn' onClick={ showDeleteConfirm }>B</button>
          <button class='btn' onClick={ showDeleteConfirm }>C</button>
        </div>
      </div>
    );
  }
}

export default App;