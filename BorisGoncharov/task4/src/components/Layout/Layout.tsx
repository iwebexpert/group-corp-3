import React, { FC } from 'react';

import { Header } from '../Header';

import './Layout.scss';
import { ChatList } from '../ChatList';
import { Messenger } from '../Messenger';
import { AuthUser } from '../../context/AuthUser';
import { generate } from 'shortid';

export const Layout: FC<{}> = () => {
  const chats = [
    { title: 'Chat 1', id: generate() },
    { title: 'Chat 2', id: generate() },
    { title: 'Chat 3', id: generate() },
    { title: 'Chat 4', id: generate() },
  ];
  return (
    <AuthUser.Provider value="User">
      <div className="vh-100 vw-100 bg-light">
        <div className="box d-flex flex-column shadow">
          <Header title="Chat v.0.0.4" />

          <div className="row no-gutters flex-grow-1 box__body">
            <div className="col-4 h-100">
              <ChatList chats={chats} />
            </div>

            <div className="col-8 h-100 d-flex flex-column">
              <Messenger />
            </div>
          </div>
        </div>
      </div>
    </AuthUser.Provider>
  );
};
