import * as React from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import routerArr from './routerArr';

import { Menu, Icon } from 'antd';


const defaultIconName = 'tags-o';

class MenuNew extends React.Component {
  render() {
    let rows = [];

    for (let i = 0; i < routerArr.length; i++) {
      let item = routerArr[i];

      if (item.routes) {
        rows.push(
          <Menu.SubMenu
            key='sub1'
            title={<span><Icon type={ item.icon ? item.icon : defaultIconName } /><span>Dashboard</span></span>}
          >
            {
              item.routes.map((ii, index) => (
                <Menu.Item key={ i.toString() + '-' + index.toString() } title={ ii.title }>
                  <Link to={ ii.path }>
                    <Icon type={ ii.icon ? ii.icon : defaultIconName } />
                    <span>{ ii.title }</span>
                  </Link>
                </Menu.Item>
              ))
            }
          </Menu.SubMenu>
        );

      } else {
        rows.push(
          <Menu.Item key={ i.toString() }>
            <Link to={ item.path }>
              <Icon type={ item.icon ? item.icon : defaultIconName } />
              <span>{ item.title }</span>
            </Link>
          </Menu.Item>
        );
      }
    }
    return (
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        { rows }
      </Menu>
    );
  }
}

export default class MenuOld extends React.Component {
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
      if (item.routes) {
        rows.push(<Route key={ i.toString() } exact={ item.exact ? true : false } path={ item.path } component={ item.component } />);
        item.routes.map((ii, index) => (
          rows.push(<Route key={ i.toString() + '-' + index.toString() } path={ ii.path } component={ ii.component } />)
        ));
      } else {
        rows.push(<Route key={ i.toString() } exact={ item.exact ? true : false } path={ item.path } component={ item.component } />);
      }
    }

    // 404 page
    // rows.push(<Route component={ NoMatch }/>);

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

export { MenuNew, MenuOld, Routes };
