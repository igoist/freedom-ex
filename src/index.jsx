import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router
} from 'react-router-dom';

import { MenuNew, MenuOld, Routes } from './router';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const handleMenuBtnClick = () => {
  document.body.classList.toggle('nav-opened');
};

ReactDOM.render(
  <AppContainer>
    <Router>
      <div>
        <MenuOld />
        <a className='menuBtn' onClick={ handleMenuBtnClick }>
          <del className='bar'></del>
          <del className='bar'></del>
          <del className='bar'></del>
        </a>
        {/* <Routes /> */}


        <Layout>
          <Sider width={ 256 } style={{ height: '100vh', overflow: 'scroll' }}>
            <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
            <MenuNew />
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
            <Content style={{ margin: '24px 16px 0' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Routes />
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created Rick and Morty
            </Footer>
          </Layout>
        </Layout>
      </div>
    </Router>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
