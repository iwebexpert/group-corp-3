import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.css";
import { Layout } from './Layout';
import './common/i18n';
import { Provider } from 'react-redux';
import { initStore, history } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';

const {store, persistor} = initStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ConnectedRouter history={history}>
        <Layout/>
      </ConnectedRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);