import * as React from 'react';

import {
  Route,
  Link
} from 'react-router-dom';

import App2 from './usecase/App';
import App from './usecase/Modal02/';
import AppTooltip from './usecase/Tooltip/';
import AppEditor from './usecase/Editor01/';
import AppTest from './updateTest/App';
import AppTodo from './usecase/Todo';
import AppCounter from './usecase/Counter';
import AppConnect from './usecase/Connect';

const currentUrl = '/';

const routerArr = [
  {
    path: currentUrl,
    title: 'Component: Pagination',
    component: AppTest
  },
  {
    path: currentUrl + 'popover',
    title: 'Component: Popover',
    component: App2
  },
  {
    path: currentUrl + 'modal',
    title: 'Component: Modal',
    component: App
  },
  {
    path: currentUrl + 'tooltip',
    title: 'Component: Tooltip',
    component: AppTooltip
  },
  {
    path: currentUrl + 'editor',
    title: 'Test: Editor',
    component: AppEditor
  },
  {
    path: currentUrl + 'todo',
    title: 'App: Todo',
    component: AppTodo
  },
  {
    path: currentUrl + 'counter',
    title: 'App: Counter',
    component: AppCounter
  },
  {
    path: currentUrl + 'connect',
    title: 'App: Connect',
    component: AppConnect
  },
];

export default class Menu extends React.Component {
  render() {
    let rows = [];

    for (let i = 0; i < routerArr.length; i++) {
      let item = routerArr[i];
      rows.push(
        <li key={ i.toString() }>
          <Link to={ item.path }>
            { item.title }
          </Link>
        </li>
      );
    }

    return (
      <React.Fragment>
        <ul className='siteMenu'>
          { rows }
        </ul>
      </React.Fragment>
    );
  }
}

class Routes extends React.Component {
  render() {
    let rows = [];

    for (let i = 0; i < routerArr.length; i++) {
      let item = routerArr[i];
      if (item.path === currentUrl) {
        rows.push(<Route key={ i.toString() } exact path={ item.path } component={ item.component } />);
      } else {
        rows.push(<Route key={ i.toString() } path={ item.path } component={ item.component } />);
      }
    }

    return (
      <React.Fragment>
        { rows }
      </React.Fragment>
    );
  }
}

export { Menu, Routes };
