import React from 'react';
import Loading from './Loading';

class Card extends React.Component {
  render() {
    const { file, dispatch } = this.props;
    const { id, fileName, src } = file;

    return (
      <div className='ant-upload-list-item ant-upload-list-item-done'>
        <div className='ant-upload-list-item-info'>
          <span>
            <a className='ant-upload-list-item-thumbnail' href='https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png' target='_blank' rel='noopener noreferrer'>
              <img src={ src } alt={ fileName } />
            </a>
            <a href={ src } target='_blank' rel='noopener noreferrer' className='ant-upload-list-item-name' title={ fileName }>{ fileName }</a>
          </span>
        </div>
        <span className='ant-upload-list-item-actions'>
          <a href={ src } target='_blank' rel='noopener noreferrer' title='Preview file'>
            <i className='anticon anticon-eye-o'></i>
          </a>
          <i
            className='anticon anticon-delete'
            title='Remove file'
            onClick={ () => dispatch({ type: 'delete', id })}
          ></i>
        </span>
      </div>
    );
  }
}


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleState = this.handleState.bind(this);
    this.mockDispatch = this.mockDispatch.bind(this);

    this.state = {
      fileList: [{
        id: 0,
        fileName: 'test.png',
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }, {
        id: 1,
        fileName: 'test.png',
        src: 'https://hbimg.b0.upaiyun.com/f7938d66bd896ef98d3854a7cf234db529f0f87acfa9d-yqxRs7_sq140sf'
      }],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.input.addEventListener('change', () => {
      this.setState({
        isLoading: true
      });
    });
  }

  handleState(obj) {
    this.setState(obj);
  }

  handleUpload() {
    let file = this.input.files[0];
    let pp = this.pp;
    console.log(file);

    let reader = new FileReader();

    reader.onloadstart = function() {
      // 这个事件在读取开始时触发
      console.log('onloadstart');
      // document.getElementById('bytesTotal').textContent = file.size;
    };

    reader.onprogress = function(p) {
      // 这个事件在读取进行中定时触发
      console.log('onprogress');
      // document.getElementById('bytesRead').textContent = p.loaded;
      pp.textContent = p.loaded / p.total;
      console.log('onprogress: ', pp.textContent);
      // console.log(document.getElementById('ppp'));
    };

    reader.onload = function() {
      // 这个事件在读取成功结束后触发
      console.log('load complete');
    };

    reader.onloadend = function() {
      // 这个事件在读取结束后，无论成功或者失败都会触发
      if (reader.error) {
        console.log(reader.error);
      } else {
        console.log('load end');
        // console.log(reader.result);
      }
    };

    // reader.readAsBinaryString(file);
    reader.readAsDataURL(file);

    // let fd = new FormData();
    // fd.append('file', file);

    // const init = {
    //   method: 'POST',
    //   body: fd,
    //   // credentials: 'include'
    // };

    // fetch('http://localhost:3005/api/upload', init)
    //   .then(r => r.json())
    //   .then(r => console.log(r))
    // ;
  }

  handleClick() {
    this.input.click();
  }

  mockDispatch(action) {
    let state = this.state;
    let { fileList } = state;
    switch (action.type) {
      case 'delete':
        fileList = fileList.filter(file => file.id !== action.id);
        break;
    }
    // console.log(fileList);
    this.setState({
      fileList
    });
  }

  render() {
    const { fileList, isLoading } = this.state;
    const uploadBtn = (
      <div onClick={ this.handleClick }>
        <i className='anticon anticon-plus' style={{ color: '#999', fontSize: '32px' }}></i>
        <div className='ant-upload-text' style={{ color: '#666', userSelect: 'none' }}>Upload</div>
      </div>
    );

    return (
      <div className='clearfix'>
        <div className='ant-upload-list ant-upload-list-picture-card'>
          {
            fileList.map((file, index) => (
              <Card
                key={ index.toString() }
                file={ file }
                dispatch={ this.mockDispatch }
              />
            ))
          }

          {
            isLoading && (
              <Loading
                file={ this.input.files[0] }
                fileList={ fileList }
                handleUploadState={ this.handleState }
              />
            )
          }
        </div>

        <div className='ant-upload ant-upload-select ant-upload-select-picture-card' style={{ width: '128px', height: '128px' }}>
          <span className='ant-upload' role='button'>
            <input type='file' accept='' style={{ display: 'none' }} ref={ el => this.input = el } />
            { uploadBtn }
          </span>
        </div>

        <button onClick={ this.handleUpload }>Upload</button>
        <p id='ppp' ref={ el => this.pp = el }>0.0</p>

        <h1>Mr. Meeseeks</h1>
        <h1>Mr. Meeseeks</h1>
        <h1 onClick={ () => this.setState({ isLoading: !this.state.isLoading })}>Mr. Meeseeks</h1>
      </div>
    );
  }
}

export default Upload;
