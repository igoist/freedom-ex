import React from 'react';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload() {
    let file = this.input.files[0];
    // let pp = this.pp;
    // console.log(file);

    // let reader = new FileReader();

    // reader.onloadstart = function() {
    //   // 这个事件在读取开始时触发
    //   console.log('onloadstart');
    //   // document.getElementById("bytesTotal").textContent = file.size;
    // };

    // reader.onprogress = function(p) {
    //   // 这个事件在读取进行中定时触发
    //   console.log('onprogress');
    //   // document.getElementById('bytesRead').textContent = p.loaded;
    //   // pp.textContent = p.loaded;
    //   console.log(pp, p);
    //   // console.log(document.getElementById('ppp'));
    // };

    // reader.onload = function() {
    //   // 这个事件在读取成功结束后触发
    //   console.log('load complete');
    // };

    // reader.onloadend = function() {
    //   // 这个事件在读取结束后，无论成功或者失败都会触发
    //   if (reader.error) {
    //     console.log(reader.error);
    //   } else {
    //     console.log('load end');
    //     // console.log(reader.result);
    //   }
    // };

    // // reader.readAsBinaryString(file);
    // reader.readAsDataURL(file);

    let fd = new FormData();
    fd.append('file', file);

    const init = {
      method: 'POST',
      body: fd,
      // credentials: 'include'
    };

    fetch('http://localhost:3005/api/upload', init)
      .then(r => r.json())
      .then(r => console.log(r))
    ;
  }

  render() {
    return (
      <div>
        <h1>Mr. Meeseeks</h1>
        <h1>Mr. Meeseeks</h1>
        <h1>Mr. Meeseeks</h1>
        <input type='file' ref={ el => this.input = el } />
        <button onClick={ this.handleUpload }>Upload</button>
        <p id='ppp' ref={ el => this.pp = el }>0.0</p>
      </div>
    );
  }
}

export default Upload;
