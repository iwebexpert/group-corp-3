import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import {Provider} from "react-redux";
import {history, initStore} from "./store";
import {ConnectedRouter} from "connected-react-router";
import {PersistGate} from "redux-persist/integration/react"
import './index.scss';

const {store, persistor} = initStore();

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

