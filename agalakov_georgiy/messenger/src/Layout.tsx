import React from 'react';
import ChatList from './components/ChatList/ChatList';
import Header from './components/Header/Header';
import Messenger from './components/Messenger/Messenger';
import "bootstrap/dist/css/bootstrap.min.css";

const Layout: React.FC<{}> = () => {
    return (
        <div className="container">
            <div className="row mt-5 p-0 border-right border-left border-top">
                <Header />
            </div>
            <div className="row border">
                <div className="col-4 m-0 p-0 border-right">
                    <ChatList />
                </div>
                <div className="col-8 m-0 p-0">
                    <Messenger />
                </div>
            </div>
        </div>
        
    )
}

export default Layout;
