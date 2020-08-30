import React, {Component} from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import {ConfigApp} from './types/types';

export const ConfigAppContext = React.createContext<any>(null);
export const ConfigAppProvider = ConfigAppContext.Provider;
export const ConfigAppConsumer = ConfigAppContext.Consumer;

class App extends Component {
    public state: ConfigApp = {
        lang: null,
        theme: null,
        author: ''
    };

    changeContext = (data: any): any => {
        this.setState(data);
    }

    render() {
        return (
            <ConfigAppProvider value={{setting: this.state, changeContext: this.changeContext}}>
                <Layout/>
            </ConfigAppProvider>
        );
    }
}

export default App;
