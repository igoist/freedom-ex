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
      preparedFile: null
    };
  }

  componentDidMount() {
    let input = this.input;
    input.addEventListener('change', () => {
      if (input.files.length) {
        const file = input.files[0];
        input.value = '';
        this.setState({
          isLoading: true,
          preparedFile: file
        });
      }
    });
  }

  handleState(obj) {
    this.setState(obj);
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
    const { fileList, isLoading, preparedFile } = this.state;
    const uploadBtn = (
      <div>
        <i className='anticon anticon-plus' style={{ color: '#999', fontSize: '32px' }}></i>
        <div className='ant-upload-text' style={{ marginTop: '8px', color: '#666', userSelect: 'none' }}>Upload</div>
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
                file={ preparedFile }
                fileList={ fileList }
                handleUploadState={ this.handleState }
              />
            )
          }
        </div>

        <div className='ant-upload ant-upload-select ant-upload-select-picture-card' style={{ width: '128px', height: '128px' }}>
          <span className='ant-upload' role='button' onClick={ this.handleClick }>
            <input type='file' accept='' style={{ display: 'none' }} ref={ el => this.input = el } />
            { uploadBtn }
          </span>
        </div>
      </div>
    );
  }
}

export default Upload;
