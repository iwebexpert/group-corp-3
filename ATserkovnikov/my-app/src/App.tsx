import React from 'react';
import {Layout} from "./Components/Layout";
import 'bootstrap/dist/css/bootstrap.min.css'

export const ConfigContext = React.createContext<ConfigApp>({lang: 'en'});
export const ConfigContextProvider = ConfigContext.Provider;
export const ConfigContextConsumer = ConfigContext.Consumer;

export const App: React.FC = () => {
    return (<Layout/>);
};

