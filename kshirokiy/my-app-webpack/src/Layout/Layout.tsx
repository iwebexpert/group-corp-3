import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {Switch, Route} from 'react-router-dom';
import {MessengerContainer} from '../MessengerContainer/MessengerContainer';
import {AddingChatForm} from '../AddingChatForm/AddingChatForm';

export const Layout: React.FC<{}> = ({children}) => {
    return (
        <>
            <Header/>
            <div className='container-fluid' style={{maxWidth: '980px'}}>
                <div className='row'>
                    <div className='col-md-4'>
                        <ChatList/>
                        <AddingChatForm/>
                    </div>
                    <div className='col-md-8'>
                        <Switch>
                            <Route path='/chats/:id' component={MessengerContainer} />
                            <Route path='/' children={<MessengerContainer />} />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
