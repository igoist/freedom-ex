import React from 'react';
import ReactDOM from 'react-dom';
// import App from './UpdateTest/App';
// import App from './ComponentsUsecase/App';
import App from './ComponentsUsecase/Modal02/';
import { AppContainer } from 'react-hot-loader';


ReactDOM.render(
  <AppContainer>
    <App name='igoist' />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
