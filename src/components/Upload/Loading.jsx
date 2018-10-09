import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { file, fileList, handleUploadState } = this.props;
    let progress = this.progress;

    // let reader = new FileReader();

    // // reader.onloadstart = function() {
    // //   console.log('onloadstart');
    // // };

    // reader.onprogress = function(p) {
    //   progress.style.width = (p.loaded / p.total) * 100 + '%';
    // };

    // // reader.onload = function() {
    // //   console.log('load complete');
    // // };

    // reader.onloadend = function() {
    //   if (reader.error) {
    //     console.log(reader.error);
    //   } else {
    //     // console.log('load end');
    //     // console.log(reader.result);
    //     fileList.push({
    //       id: fileList.length > 0 ? fileList[fileList.length - 1].id + 1 : 0,
    //       src: reader.result,
    //       fileName: file.name
    //     });
    //     setTimeout(() => {
    //       handleUploadState({
    //         fileList,
    //         isLoading: false
    //       });
    //     }, 400);
    //   }
    // };

    // reader.readAsDataURL(file);
    let formData = new FormData();
    formData.append('file', file);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '//live.pinban.com/api/v1/upload');
    xhr.onprogress = (e) => {
      if (e.lengthComputable) {
        progress.style.width = (e.loaded / e.total) * 100 + '%';
      }
    };

    const delay = 400;

    xhr.onloadend = () => {
      if(xhr.readyState === 4 && xhr.status === 200) {
        const { id, name, url } = JSON.parse(xhr.response);
        if (fileList.filter(file => file.id === id).length === 0) {
          fileList.push({
            id,
            src: url,
            fileName: name
          });
        } else {
          setTimeout(() => {
            // showMessage({
            //   content: '请不要重复上传相同的作业文件',
            //   duration: 2000,
            //   type: 'warning'
            // });
            console.log('请不要重复上传相同的作业文件');
          }, delay + 20);
        }
      }
      setTimeout(() => {
        handleUploadState({
          fileList,
          isLoading: false
        });
      }, delay);
    };
    xhr.send(formData);
  }

  render() {
    const { file } = this.props;

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
