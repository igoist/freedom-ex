import React from 'react';
import AppCard from './Card';
import AppDemo from './Demo';
import AppTree from './Tree';
import Layout from './Layout';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default () => (
  <div>

    <Layout>
      <Tabs>
        <TabPane tab='Tab 1' key='1'>
          Content of Tab Pane 1
          <AppCard />
        </TabPane>
        <TabPane tab='Tab 2' key='2'>
          Content of Tab Pane 2
          <AppDemo />
          <AppTree />
        </TabPane>
      </Tabs>
    </Layout>
  </div>
);
