import React from 'react';
import ReactDOM from 'react-dom';
// import App from './UpdateTest/App';
import App2 from './ComponentsUsecase/App';
import App from './ComponentsUsecase/Modal02/';
import { AppContainer } from 'react-hot-loader';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

ReactDOM.render(
  <AppContainer>
    <Router>
      <div>
        <ul>
          <li>
            <Link to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link to={'/b'}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={'/c'}>
              Components
            </Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/b" component={App2} />
        <Route path="/c" component={App} />
      </div>
    </Router>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
