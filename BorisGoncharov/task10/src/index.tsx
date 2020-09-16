import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ChatContainer from './containers/ChatContainer';
import { ConnectedRouter } from 'connected-react-router';
import { initStore, history } from './state/store';
import { Redirect, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

const { store, persistor } = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path={`/:chatId`} exact component={ChatContainer}></Route>

            <Route path="">
              <Redirect to={`/${0}`}></Redirect>
            </Route>
          </Switch>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
