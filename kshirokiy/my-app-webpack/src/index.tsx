import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {PersistGate} from 'redux-persist/integration/react';
import {initStore, history} from './store';

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

// json-server --watch db.json --port 3001
