import React from 'react';

class Popover extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { target } = this.props;
    let top = target.offsetTop + target.offsetHeight;
    let left = target.offsetLeft + target.offsetWidth / 2 - this.el.offsetWidth / 2;

    this.el.style.top = top + 'px';
    this.el.style.left = left + 'px';
  }

  render() {

    return (
      <div style={{ position: 'absolute', top: '0px', left: '0px', width: '100%'}}>
        <div>
          <div ref={ el => this.el = el } class='popover popover-placement-bottom' style={{ transformOrigin: '50% 111px 0px' }}>
            <div class='popover-content'>
              <div class='popover-arrow'></div>
              <div class='popover-inner'>
                Popover text
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Popover;