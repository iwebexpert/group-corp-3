import React from 'react';
import logo from './logo.svg';
//import './App.css';
import {Chat} from './components/Chat';

const title = (<h1>Chat</h1>)

function App() {
  return (
    <>
      {title}
      <Chat/>
    </>
  );
}

export default App;
