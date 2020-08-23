import React from "react";
import "./Layout.scss";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Messenger } from "../Messenger";
import { MessengerList } from "../MessengerList";

export function Layout() {
  return (
    <div className="layout">
      <div className="layout__header">
        <Header />
      </div>
      <div className="layout__body">
        <div className="layout__messenger-list">
          <MessengerList />
        </div>
        <div className="layout__current-messenger">
          <Messenger />
        </div>
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
}
