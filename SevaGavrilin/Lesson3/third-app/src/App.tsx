import React, { Fragment } from 'react';
import logo from './logo.svg';
//import './App.css';

import { Messages } from './components/Messages';

const items = ['text1','text2','text3']

function App() {

  return (
    <>
      <hr/>
      <Messages/>
      <hr/>
    </>
  );
}

export default App;
