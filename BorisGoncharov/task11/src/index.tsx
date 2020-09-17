import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './containers/ChatContainer';
import { ConnectedRouter } from 'connected-react-router';
import { store, history } from './state/store';
import { Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path={`/:chatId`} exact component={ChatContainer}></Route>

          <Route path="">
            <Redirect to={`/${0}`}></Redirect>
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
