import React from 'react';
import './style.css';
import path from 'path';

const perPage = 18;

const handleUrl = url => {
  return `/img/bilibili/${ path.basename(url) }`;
};

class Page extends React.Component {
  render() {
    const { page } = this.props;

    return (
      <div className='page' style={{ zIndex: this.props.id }} data-id={ this.props.id }>
        <div className='front item-box'>
          {
            page.slice(0, 9).map((item, i) => <div key={ i.toString() } className='item' style={{ backgroundImage: `url(${ handleUrl(item.cover) })` }}>{ item.media_id }</div>)
          }
        </div>
        <div className='back item-box'>
          {
            page.slice(9, 18).map((item, i) => <div key={ i.toString() } className='item' style={{ backgroundImage: `url(${ handleUrl(item.cover) })` }}>{ item.media_id }</div>)
          }
        </div>
      </div>
    );
  }
}


class Collector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: []
    };
  }


  componentDidMount() {
    let handleToggle = target => {
      if (target.classList.contains('flip')) {
        target.style.zIndex = target.dataset.id;
      } else {
        let handleEnd = () => {
          target.style.zIndex = '';
          target.removeEventListener('transitionend', handleEnd);
        };
        target.addEventListener('transitionend', handleEnd);
      }
      target.classList.toggle('flip');
    };

    let book = document.querySelector('.book');
    book.addEventListener('click', e => {
      if (e.target.parentNode.classList.contains('page')) {
        handleToggle(e.target.parentNode);
      }
      if (e.target.parentNode.parentNode.classList.contains('page')) {
        handleToggle(e.target.parentNode.parentNode);
      }
    });

    this.loadMap();
  }


  loadMap() {
    let xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', '/map/bilibili.json');
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const res = JSON.parse(xhr.response);
        let arr = [];
        for (let i = 0; i < Math.ceil(res.length / perPage); i++) {
          arr.push(res.slice(i * perPage, (i + 1) * perPage));
        }
        this.setState(() => ({ arr }));
        // console.log(res);
        console.log(arr);
      }
    };
    xhr.send();
  }

  render() {
    const { arr } = this.state;
    console.log(arr);
    return (
      <div>
        {/* <h1>Collector</h1> */}
        <div className='book'>
          {
            arr.map((item, index) => {
              return <Page key={ index.toString() } id={ arr.length - index } page={ item } />;
            })
          }
        </div>
      </div>
    );
  }
}

export default Collector;
