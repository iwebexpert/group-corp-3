import React from "react";
import { Messenger } from "../Messanger";
import { ChatList } from "../ChatList";
import {Header} from '../Header';
import './Layout.css';

export function Layout() {
  
  return (
    <>
      <Header />
      <div className="layout">
        <ChatList />
        <Messenger />
      </div>
    </>
  );
}