import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {Messenger} from '../Messenger/Messenger';

export const Layout: React.FC<{}> = ({children}) => {
    return (
        <>
            <Header/>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <ChatList/>
                    </div>
                    <div className='col-md-8'>
                        <Messenger/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
