import React from 'react';
import Pagination from '../Components/Pagination';
import '../App.css';
import { log } from '../util/';

const { l } = log;

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { limit, total } = this.props;
    if (Math.ceil(total / limit) > 1) {
      this.pagination = new Pagination({
        _current: 1,
        _total: Math.ceil(total / limit),
        _onChange: () => {},
        _paginationList: this.paginationList
      });
    }
  }

  componentDidUpdate(prevProps) {
    l({
      title: 'Pagination',
      text: 'test',
      textColor: 'green',
    });
    const { total, limit } = this.props;

    if (this.paginationList && Math.ceil(total / limit) > 1 && Math.ceil(total / limit) !== Math.ceil(prevProps.total / prevProps.limit)) {
      l({
        title: 'Pagination',
        text: 'enter l2',
        textColor: 'green',
      });
      if (this.pagination) {
        l({
          title: 'Pagination',
          text: 'enter l31',
          textColor: 'green',
        });
        this.pagination.resetState({
          _current: 1,
          _total: Math.ceil(total / limit),
        });
      } else {
        l({
          title: 'Pagination',
          text: 'enter l32',
          textColor: 'green',
        });
        this.pagination = new Pagination({
          _current: 1,
          _total: Math.ceil(total / limit),
          _onChange: () => {},
          _paginationList: this.paginationList
        });
      }
    }

    if (Math.ceil(total / limit) === 1) {
      this.pagination = null;
    }
  }

  render() {
    const { total, limit } = this.props;

    return (
      <div className='item-wrap' style={{ width: '600px' }}>
        {
          total > limit &&
          <div className='pagination-wrap'>
            <div className='pagination'>
              <div className='pagination__info' data-total=''>
                <span className='total each'>共 { total } 条，{ limit } 条每页</span>
              </div>
              <div className='pagination-list' ref={ el => this.paginationList = el }></div>
            </div>
          </div>
        }
      </div>
    );
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 10,
      total: 118
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(tag) {

    if (tag === 0) {
      this.setState({
        total: 18
      });
    }
    if (tag === 1) {
      this.setState({
        total: 118
      });
    }
    if (tag === 2) {
      this.setState({
        total: 6
      });
    }
  }

  render() {
    const { total, limit } = this.state;

    return (
      <div>
        <button onClick={ () => this.handleClick(0) }>Button0</button>
        <button onClick={ () => this.handleClick(1) }>Button1</button>
        <button onClick={ () => this.handleClick(2) }>Button2</button>

        <Item limit={ limit } total={ total } />
      </div>
    );
  }
}

export default App;
