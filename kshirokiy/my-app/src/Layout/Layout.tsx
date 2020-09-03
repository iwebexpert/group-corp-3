import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {Messenger} from '../Messenger/Messenger';
import {Switch, Route} from 'react-router-dom';

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
                        {/*<Messenger/>*/}
                        <Switch>
                            <Route path="/chats/:id" children={<Messenger/>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
