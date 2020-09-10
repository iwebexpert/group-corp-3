import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter, HashRouter, MemoryRouter} from 'react-router-dom';
import logger from 'redux-logger';
import rootReducer from './store/reducers/rootReducer';
import {createStore, applyMiddleware, Store} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';

const store: Store = createStore(
    rootReducer,
    composeWithDevTools(
        //applyMiddleware(logger)
    )
);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
