import * as React from 'react';

import {
  Route,
  Link
} from 'react-router-dom';

// import App from './UpdateTest/App';
import App2 from './ComponentsUsecase/App';
import App from './ComponentsUsecase/Modal02/';
import AppTooltip from './ComponentsUsecase/Tooltip/';
import AppEditor from './ComponentsUsecase/Editor01/';
import AppTest from './UpdateTest/App';

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
  }
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
