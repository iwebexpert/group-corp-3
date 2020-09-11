import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ChatContainer } from './containers/ChatContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChatContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
