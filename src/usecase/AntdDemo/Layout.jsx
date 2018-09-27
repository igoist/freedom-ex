import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;


// class Layout extends React.Component {
//   render() {
//     console.log('children 0: ', this.props.children[0]);
//     console.log('children 1: ', this.props.children[1]);

//     return (
//       <div className='two-cols-layout'>
//         <div className='sidebar'>
//           {this.props.children[0]}
//         </div>
//         <div className='main'>
//           {this.props.children[1]}
//         </div>
//       </div>
//     );
//   }
// }

// export default Layout;

class BasicLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Sider width={ 256 } style={{ minHeight: '100vh' }}>
          <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px' }} />
          <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Icon type='pie-chart' />
              <span>Helloworld</span>
            </Menu.Item>
            <SubMenu
              key='sub1'
              title={<span><Icon type='dashboard' /><span>Dashboard</span></span>}
            >
              <Menu.Item key='2'>分析页</Menu.Item>
              <Menu.Item key='3'>监控页</Menu.Item>
              <Menu.Item key='4'>工作台</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              Content
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created Rick and Morty
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout;
