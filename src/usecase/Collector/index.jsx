import React from 'react';
import './style.css';


class Page extends React.Component {
  render() {
    return (
      <div className='page' style={{ zIndex: this.props.id }} data-id={ this.props.id }>
        <div className='front item-box'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
        <div className='back item-box'>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
          <div className='item'></div>
        </div>
      </div>
    );
  }
}


class Collector extends React.Component {
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
  }

  render() {
    return (
      <div>
        <h1>Collector</h1>
        <div className='book'>
          {
            [1, 2, 3, 4 ,5].map((item, index) => {
              return <Page key={ index.toString() } id={ 5 - index } />;
            })
          }
        </div>
      </div>
    );
  }
}

export default Collector;
