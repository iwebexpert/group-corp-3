import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import {App} from "./App";
import {BrowserRouter} from "react-router-dom";
import {ChatStore} from "./stores";

import './index.scss';

ReactDOM.render(
    <BrowserRouter>
        <Provider chats={new ChatStore()}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

