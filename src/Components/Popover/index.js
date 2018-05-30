class Popover {
  constructor(props) {
    const { target } = props;

    let tmp = this.htmlToElement(`
      <div style='position: absolute; top: 0px; left: 0px; width: 100%;'>
        <div>
          <div class='popover popover-placement-bottom' style='left: 183.281px; top: 212.562px; transform-origin: 50% 111px 0px;'>
            <div class='popover-content'>
              <div class='popover-arrow'></div>
              <div class='popover-inner'>
                popover text
              </div>
            </div>
          </div>
        </div>
      </div>
    `);

    document.body.appendChild(tmp);

    let wrap = tmp.querySelector('.popover');
    let top = target.offsetTop + target.offsetHeight;
    let left = target.offsetLeft + target.offsetWidth / 2 - wrap.offsetWidth / 2;
    wrap.style.top = top + 'px';
    wrap.style.left = left + 'px';

    console.log(wrap);

    // CAN NOT!
    // document.body.appendChild(tmp);
    this.render();
  }

  htmlToElement(html) {
    let template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    console.log(template.content.querySelector('popover'));
    return template.content.firstChild;
  }

  render() {
    // console.log(this.tmp);
    // document.body.appendChild(this.tmp);
  }
}

export default Popover;