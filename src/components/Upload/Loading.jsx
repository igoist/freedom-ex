import React from 'react';

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='ant-upload-list-item ant-upload-list-item-uploading'>
        <div className='ant-upload-list-item-info'>
          <span>
            <div className='ant-upload-list-item-uploading-text'>Uploading...</div>
            <span className='ant-upload-list-item-name' title='Huaban-0.1.0-mac.zip'>Huaban-0.1.0-mac.zip</span>
          </span>
        </div>
        <i title='Remove file' className='anticon anticon-cross'></i>
        <div className='ant-upload-list-item-progress'>
          <div className='ant-progress ant-progress-line ant-progress-status-normal ant-progress-default'>
            <div>
              <div className='ant-progress-outer'>
                <div className='ant-progress-inner'>
                  <div className='ant-progress-bg' style={{ width: '97.2358%', height: '2px' }}></div>
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
