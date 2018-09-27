import React from 'react';
import AppCard from './Card';
import AppDemo from './Demo';
import AppTree from './Tree';
import Layout from './Layout';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import {
  Route
} from 'react-router-dom';

const T = () => (
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
);

import Analysis from './Dashboard/Analysis';
import Monitor from './Dashboard/Monitor';
import Workplace from './Dashboard/Workplace';

export default () => (
  <div>
    <Layout>
      <Route key={ 'rrr' } path={ 'antdDemo' } component={ T } />
      <Route key={ 'rrranalysis' } path={ 'antdDemo/analysis' } component={ Analysis } />
      <Route key={ 'rrrmonitor' } path={ 'antdDemo/monitor' } component={ Monitor } />
      <Route key={ 'rrrworkplace' } path={ 'antdDemo/workplace' } component={ Workplace } />
    </Layout>
  </div>
);
