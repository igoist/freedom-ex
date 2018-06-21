import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleOK = this.handleOK.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    let handleIn = () => {
      this.mask.classList.remove('fade-appear');
      this.mask.classList.remove('fade-appear-active');

      this.mask.removeEventListener('animationend', handleIn);
    };
    this.mask.addEventListener('animationend', handleIn);

    this.mask.classList.add('fade-appear');
    this.mask.classList.add('fade-appear-active');
  }

  handleOK() {
    const { onOk } = this.props;

    if (onOk) {
      onOk();
    }

    this.handleCancel();
  }

  handleCancel() {
    const { close } = this.props;

    this.mask.classList.add('fade-leave');
    this.mask.classList.add('fade-leave-active');

    let handleOut = () => {
      this.mask.classList.remove('fade-leave');
      this.mask.classList.remove('fade-leave-active');

      document.body.style.overflow = null;
      this.mask.removeEventListener('animationend', handleOut);

      close();
    };

    this.mask.addEventListener('animationend', handleOut);
    this.mask.classList.add('fade-leave');
    this.mask.classList.add('fade-leave-active');
  }

  render() {
    // const IS_REACT_16 = !!ReactDOM.createPortal;
    // console.log('IS_REACT_16: ', IS_REACT_16);
    const { title, content, okText, cancelText } = this.props;

    return (
      <div className='top1'>
        <div className='modal-mask' ref={ el => this.mask = el }></div>
        <div className='modal-wrap'>
          <div className='modal confirm' ref={ el => this.modal = el }>
            <div className='modal-content'>
              <button aria-label='Close' className='modal-close' onClick={ this.handleCancel }>
                <span className='modal-close-x'></span>
              </button>
              <div className='modal-body'>
                <div className='confirm-body-wrapper'>
                  <div className='confirm-body'>
                    <i className='icon icon-question-circle'></i>
                    <span className='confirm-title'>{ title }</span>
                    <div className='confirm-content'>{ content }</div>
                    <div className='confirm-btns'>
                      <button className='btn' onClick={ this.handleCancel } style={{ marginRight: '12px' }}>
                        <span>{ cancelText }</span>
                      </button>
                      <button className='btn' onClick={ this.handleOK }>
                        <span>{okText}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function confirm(config) {
  let div = document.createElement('div');
  document.body.appendChild(div);

  function close(...args) {
    destroy(...args);
  }

  function destroy(...args) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    if (config.onCancel) {
      config.onCancel(...args);
    }
  }

  function render(props) {
    ReactDOM.render(<Modal { ...props } />, div);
  }

  config.close = close;
  // render({ ...config, render: render });
  render(config);
}

Modal.confirm = confirm;

export default Modal;
