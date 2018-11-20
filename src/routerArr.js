import App2 from './usecase/App';
import App from './usecase/Modal02/';
import AppTooltip from './usecase/Tooltip/';
import AppEditor from './usecase/Editor01/';
import AppTest from './updateTest/App';
import AppTodo from './usecase/Todo';
import AppTodo2 from './usecase/Todo2';
import AppCounter from './usecase/Counter';
import AppConnect from './usecase/Connect';
import AppAntdDemo from './usecase/AntdDemo';
import AppAnalysis from './usecase/AntdDemo/Dashboard/Analysis';
import AppMonitor from './usecase/AntdDemo/Dashboard/Monitor';
import AppWorkplace from './usecase/AntdDemo/Dashboard/Workplace';
import AppUpload from './usecase/Upload';
import AppCollector from './usecase/Collector';

const currentUrl = '/';

const routerArr = [
  {
    path: currentUrl,
    title: 'Component: Pagination',
    component: AppTest,
    exact: true,
    icon: 'ellipsis'
  },
  {
    path: currentUrl + 'popover',
    title: 'Component: Popover',
    component: App2,
    icon: 'message'
  },
  {
    path: currentUrl + 'modal',
    title: 'Component: Modal',
    component: App,
    icon: 'folder'
  },
  {
    path: currentUrl + 'tooltip',
    title: 'Component: Tooltip',
    component: AppTooltip,
    icon: 'tool'
  },
  {
    path: currentUrl + 'editor',
    title: 'Test: Editor',
    component: AppEditor,
    icon: 'edit'
  },
  {
    path: currentUrl + 'todo',
    title: 'App: Todo',
    component: AppTodo,
    icon: 'bars'
  },
  {
    path: currentUrl + 'todo2',
    title: 'App: Todo2',
    component: AppTodo2,
    icon: 'bars'
  },
  {
    path: currentUrl + 'counter',
    title: 'App: Counter',
    component: AppCounter,
    icon: 'calculator'
  },
  {
    path: currentUrl + 'connect',
    title: 'App: Connect',
    component: AppConnect
  },
  {
    path: currentUrl + 'antdDemo',
    title: 'App: AntdDemo',
    component: AppAntdDemo,
  },
  {
    path: currentUrl + 'dashboard',
    title: 'App: Dashboard',
    component: AppAntdDemo,
    routes: [
      {
        path: currentUrl + 'dashboard/analysis',
        title: 'App: analysis',
        component: AppAnalysis,
        icon: 'share-alt'
      },
      {
        path: currentUrl + 'dashboard/monitor',
        title: 'App: monitor',
        component: AppMonitor,
        icon: 'star'
      },
      {
        path: currentUrl + 'dashboard/workplace',
        title: 'App: workplace',
        component: AppWorkplace,
        icon: 'to-top'
      },
    ],
    exact: true
  },
  {
    path: currentUrl + 'upload',
    title: 'App: Upload',
    component: AppUpload,
    icon: 'upload'
  },
  {
    path: currentUrl + 'collector',
    title: 'App: Collector',
    component: AppCollector,
    // icon: ''
  },
];

export default routerArr;
