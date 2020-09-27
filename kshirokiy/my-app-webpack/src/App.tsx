import React, {Component} from 'react';
import './App.scss';
import Layout from './Layout/Layout';
import {ConfigApp} from './types/types';
import {chatsData} from './ChatList/ChatList';

export const ConfigAppContext = React.createContext<any>(null);
export const ConfigAppProvider = ConfigAppContext.Provider;
export const ConfigAppConsumer = ConfigAppContext.Consumer;

class App extends Component {
    public state: ConfigApp = {
        lang: null,
        theme: null,
        author: '',
        Chats: chatsData,
        st: null
    };

    changeContext = (data: any): any => {
        this.setState(data);
    }

    addMessage = (message: any): any => {
        let chat = this.state.Chats.find(it => {
            return it.id === message.chatId;
        });
        if (chat) {
            chat.messages.push(message)
            let chatIndex = this.state.Chats.findIndex(x => x.id == message.id);
            let chats = this.state.Chats.map((ch, index) => {
                if (index === chatIndex) {
                    return chat;
                }
                return ch;
            });
            this.setState({...this.state, Chats: chats});
        }
    }

    render() {
        return (
            <ConfigAppProvider
                value={{setting: this.state, changeContext: this.changeContext, addMessage: this.addMessage}}>
                <p>APP NAME: {process.env.APP_NAME}</p>
                <p>{process.env.APP_SERVER_PATH}</p>
                <p>test: {process.env.test}</p>
                <Layout/>
            </ConfigAppProvider>
        );
    }
}

export default App;
