import App2 from './usecase/App';
import App from './usecase/Modal02/';
import AppTooltip from './usecase/Tooltip/';
import AppEditor from './usecase/Editor01/';
import AppTest from './updateTest/App';
import AppTodo from './usecase/Todo';
import AppCounter from './usecase/Counter';
import AppConnect from './usecase/Connect';
import AppAntdDemo from './usecase/AntdDemo';
import AppUpload from './usecase/Upload';

const currentUrl = '/';

const routerArr = [
  {
    path: currentUrl,
    title: 'Component: Pagination',
    component: AppTest,
    exact: true
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
  {
    path: currentUrl + 'antdDemo',
    title: 'App: AntdDemo',
    component: AppAntdDemo,
  },
  {
    path: currentUrl + 'upload',
    title: 'App: Upload',
    component: AppUpload
  },
];

export default routerArr;
