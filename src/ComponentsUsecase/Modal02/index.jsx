import React from 'react';
import Modal from './Modal';
import '../style.css';
let confirm = Modal.confirm;

function showDeleteConfirm() {
  confirm({
    title: '是否确定删除这条评论？',
    content: '删除后不可恢复',
    okText: '确定',
    // okType: 'danger',
    cancelText: '取消',
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
        <div className='btn-group'>
          <button className='btn' onClick={ showDeleteConfirm }>A</button>
          <button className='btn' onClick={ showDeleteConfirm }>B</button>
          <button className='btn' onClick={ showDeleteConfirm }>C</button>
        </div>
      </div>
    );
  }
}

export default App;
