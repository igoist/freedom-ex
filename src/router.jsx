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

import { spring, AnimatedSwitch } from 'react-router-transition';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

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
      <AnimatedSwitch
        atEnter={ bounceTransition.atEnter }
        atLeave={ bounceTransition.atLeave }
        atActive={ bounceTransition.atActive }
        mapStyles={ mapStyles }
        className='route-wrapper'
      >
        { rows }
      </AnimatedSwitch>
    );
  }
}

export { Menu, Routes };
