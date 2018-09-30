import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { file, fileList, handleUploadState } = this.props;
    let progress = this.progress;

    let reader = new FileReader();

    // reader.onloadstart = function() {
    //   console.log('onloadstart');
    // };

    reader.onprogress = function(p) {
      progress.style.width = (p.loaded / p.total) * 100 + '%';
    };

    // reader.onload = function() {
    //   console.log('load complete');
    // };

    reader.onloadend = function() {
      if (reader.error) {
        console.log(reader.error);
      } else {
        // console.log('load end');
        // console.log(reader.result);
        fileList.push({
          id: fileList.length > 0 ? fileList[fileList.length - 1].id + 1 : 0,
          src: reader.result,
          fileName: file.name
        });
        setTimeout(() => {
          handleUploadState({
            fileList,
            isLoading: false
          });
        }, 400);
      }
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { file } = this.props;
    // console.log(file);
    return (
      <div className='ant-upload-list-item ant-upload-list-item-uploading'>
        <div className='ant-upload-list-item-info'>
          <span>
            <div className='ant-upload-list-item-uploading-text'>Uploading...</div>
            <span className='ant-upload-list-item-name' title={ file.name }>{ file.name }</span>
          </span>
        </div>
        <i title='Remove file' className='anticon anticon-cross'></i>
        <div className='ant-upload-list-item-progress'>
          <div className='ant-progress ant-progress-line ant-progress-status-normal ant-progress-default'>
            <div>
              <div className='ant-progress-outer'>
                <div className='ant-progress-inner'>
                  <div className='ant-progress-bg' style={{ width: '0%', height: '2px' }} ref={ el => this.progress = el }></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Loading;
